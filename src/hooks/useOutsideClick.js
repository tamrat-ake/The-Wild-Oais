import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCaptureing = true) {
  const ref = useRef();
  useEffect(
    function () {
      function hanldleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      document.addEventListener("click", hanldleClick, listenCaptureing);
      return () =>
        document.removeEventListener("click", hanldleClick, listenCaptureing);
    },
    [handler, listenCaptureing]
  );
  return ref;
}
