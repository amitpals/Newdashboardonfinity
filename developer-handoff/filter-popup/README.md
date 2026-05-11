# Filter Popup Handoff

Standalone developer handoff for the Onfinity window filter popup.

## Files

- `index.html`
  - Popup markup only
- `styles.css`
  - All visual styling for the popup, fields, chips, and footer actions
- `script.js`
  - Basic interaction for:
    - chip toggle behavior
    - date preset fallback to `Current year`
    - custom date range reveal/hide
    - clear-all reset

## Notes

- No external assets or libraries are required.
- Icons are inline SVG.
- Typography assumes `Roboto` is available on the developer machine and falls back to `Arial`.
- The popup fields follow the same flat underline treatment used in the detail-view form fields.
- The HTML now includes only the popup component, without the surrounding window/grid demo.
- The file is intended as a reference implementation and front-end handoff, not as production-wired business logic.

## Open

Open `index.html` directly in a browser.
