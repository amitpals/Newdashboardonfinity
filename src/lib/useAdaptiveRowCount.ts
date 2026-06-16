import { RefObject, useEffect, useState } from "react";

export function useAdaptiveRowCount({
  containerRef,
  rowHeight,
  minRows = 3,
  maxRows = 24,
}: {
  containerRef: RefObject<HTMLElement | null>;
  rowHeight: number;
  minRows?: number;
  maxRows?: number;
}): number {
  const [rows, setRows] = useState(minRows);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const available = el.clientHeight;
      const fit = Math.floor(available / rowHeight);
      const clamped = Math.max(minRows, Math.min(maxRows, fit));
      setRows(clamped);
    };

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    measure();

    return () => observer.disconnect();
  }, [containerRef, rowHeight, minRows, maxRows]);

  return rows;
}
