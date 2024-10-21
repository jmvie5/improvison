import { useState, useEffect } from "react";

export default function useWindowSize() {
    const isWindowClient = typeof window === "object";

    const [windowSize, setWindowSize] = useState(
        isWindowClient ? {width: window.document.documentElement.clientWidth, height: window.document.documentElement.clientHeight} : undefined,
    );
  
    useEffect(() => {

      function setSize() {
        setWindowSize({width: window.document.documentElement.clientWidth, height: window.document.documentElement.clientHeight});
      }
  
      if (isWindowClient) {
        window.addEventListener("resize", setSize);
        return () => {
            window.removeEventListener("resize", setSize);
        };
      }

    }, [isWindowClient, setWindowSize]);
  
    return windowSize;
    
}