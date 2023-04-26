//copyright joshcawthorne https://gist.github.com/joshcawthorne/0a518b164658510f4eed74d0c4e8d003

/* To use in a page :

import useWindowSize from "../hooks/useWindowSize"

let isSmall

    var windowWidth = useWindowSize().width

    if ( windowWidth < 700) {
        isSmall = true;
    } else if (windowWidth > 700) {
        isSmall = false;
    };

*/

import { useState, useEffect } from "react";
import { window } from "browser-monads"; //npm i browser-monads

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

export default useWindowSize;