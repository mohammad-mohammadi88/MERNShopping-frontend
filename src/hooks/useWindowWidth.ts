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

useWindowWidth.SM = 640;
useWindowWidth.LG = 768;
useWindowWidth.LG = 1024;
useWindowWidth.XL = 1280;
useWindowWidth.XXL = 1536;
export default useWindowWidth;
