import { useCallback, useState } from "react";
import { useWindowEvent } from "./use-window-event";

interface ScrollPosition {
  x: number;
  y: number;
}

interface ScrollToOptions {
  x?: number;
  y?: number;
}

export const useWindowScroll = (): [
  ScrollPosition,
  (options: ScrollToOptions) => void
] => {
  const [scroll, setScroll] = useState<ScrollPosition>({
    x: typeof window !== "undefined" ? window.scrollX : 0,
    y: typeof window !== "undefined" ? window.scrollY : 0,
  });

  const scrollTo = useCallback(({ x, y }: ScrollToOptions) => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: y !== undefined ? y : window.scrollY,
        left: x !== undefined ? x : window.scrollX,
        behavior: "smooth",
      });
    }
  }, []);

  useWindowEvent("scroll", () => {
    setScroll({ x: window.scrollX, y: window.scrollY });
  });

  return [scroll, scrollTo];
};
