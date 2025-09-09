import { useEffect, useState } from "react";

const getWindowWidth = (): number => window.innerWidth;

const useWindowWidth = (): number => {
    const [windowWidth, setWindowWidth] = useState<number>(getWindowWidth());

    useEffect(() => {
        const handleResize = () => setWindowWidth(getWindowWidth());

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowWidth;
};

export default useWindowWidth;
