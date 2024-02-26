import { useEffect } from "react";

export default function useOuterClick(ref, handler) {
  useEffect(() => {
    function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    }

    window.addEventListener("mousedown", listener);
    window.addEventListener("touchstart", listener);

    return () => {
      window.removeEventListener("mousedown", listener);
      window.removeEventListener("touchstart", listener);
    };
  });
}
