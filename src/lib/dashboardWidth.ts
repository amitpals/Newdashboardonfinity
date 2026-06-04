/**
 * Self-measuring dashboard-width source for `--dash-inline-size`.
 *
 * Why this exists:
 *   Widget titles use `font-size: clamp(13px, calc(var(--dash-inline-size, 100vw) * 0.011375), 16px)`
 *   so they render the same px in every widget regardless of grid span. The `var` must come from
 *   somewhere; this module owns it without requiring any parent/root style edit on the host page.
 *
 * Framework-agnostic: no React, no Tailwind, no DOM library. Plain TS over the browser API.
 *
 * Usage:
 *   const token = register(myWidgetHeaderElement);
 *   // … later, on unmount:
 *   unregister(token);
 */

type Token = symbol;

const CSS_VAR = "--dash-inline-size";
const SCROLLABLE_OVERFLOWS = new Set(["auto", "scroll", "overlay"]);

/**
 * Selector for the canonical dashboard container. The production application uses
 * `.vis-widget-container` on the element that owns the dashboard's inline width.
 * Override via `setDashboardSelector()` if your host page uses a different class
 * or you want to fall back to a data attribute.
 */
let dashboardSelector = ".vis-widget-container, [data-dashboard-container]";

let observer: ResizeObserver | null = null;
let target: Element | null = null;
const tokens = new Map<Token, Element>();

/** Configure the CSS selector used to locate the dashboard container. */
export function setDashboardSelector(selector: string): void {
  dashboardSelector = selector;
}

/**
 * Locate the measurement target for `el`. Resolution order:
 *   1. Nearest ancestor (including self) matching `dashboardSelector` — production case.
 *   2. Nearest scrollable ancestor (`overflow: auto | scroll | overlay`) — prototype case.
 *   3. `document.documentElement` — last resort.
 */
export function findScrollableAncestor(el: Element | null): Element {
  if (!el) return document.documentElement;

  // 1. Prefer the named dashboard container.
  const named = el.closest(dashboardSelector);
  if (named) return named;

  // 2. Fall back to nearest scrollable ancestor.
  let node: Element | null = el.parentElement;
  while (node && node !== document.documentElement) {
    const cs = window.getComputedStyle(node);
    if (
      SCROLLABLE_OVERFLOWS.has(cs.overflowX) ||
      SCROLLABLE_OVERFLOWS.has(cs.overflowY)
    ) {
      return node;
    }
    node = node.parentElement;
  }
  return document.documentElement;
}

function writeWidth(width: number): void {
  document.documentElement.style.setProperty(CSS_VAR, `${Math.round(width)}px`);
}

function ensureObserver(newTarget: Element): void {
  if (target === newTarget && observer) return;

  if (observer) {
    observer.disconnect();
    observer = null;
  }

  target = newTarget;
  // Prime the value synchronously so the first paint after register() has the real number.
  writeWidth(target.clientWidth);

  if (typeof ResizeObserver === "undefined") {
    // Older browsers: fall back to window resize. Less accurate (won't catch
    // sidebar toggles that don't resize the window), but better than nothing.
    const onResize = () => target && writeWidth(target.clientWidth);
    window.addEventListener("resize", onResize);
    return;
  }

  observer = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const inline =
        entry.contentBoxSize?.[0]?.inlineSize ??
        (entry.target as HTMLElement).clientWidth;
      writeWidth(inline);
    }
  });
  observer.observe(target);
}

/**
 * Register a widget element. The module finds its scrollable ancestor and starts
 * observing it (or shares the existing observation). Returns a token to pass back
 * to `unregister()` on unmount.
 */
export function register(el: Element | null): Token {
  const token = Symbol("dash-width-token");
  if (!el || typeof document === "undefined") {
    // SSR or no element — return a no-op token.
    tokens.set(token, document.documentElement);
    return token;
  }
  const candidate = findScrollableAncestor(el);
  tokens.set(token, candidate);

  // Pick the widest registered target so multiple dashboards on one page resolve
  // to the largest one. In practice every header on a screen finds the same ancestor.
  let widest = candidate;
  for (const t of tokens.values()) {
    if (t.clientWidth > widest.clientWidth) widest = t;
  }
  ensureObserver(widest);
  return token;
}

export function unregister(token: Token): void {
  tokens.delete(token);
  if (tokens.size === 0) {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    target = null;
    document.documentElement.style.removeProperty(CSS_VAR);
  }
}
