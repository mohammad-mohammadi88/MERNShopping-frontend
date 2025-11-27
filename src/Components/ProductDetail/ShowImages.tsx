"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState, type FC } from "react";

interface Props {
    images: string[];
}

function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}
const ShowImages: FC<Props> = ({ images }) => {
    const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(
        null
    );
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const scrollToIndex = (index: number) => {
        if (!containerRef) return;
        const width = containerRef.clientWidth;
        containerRef.scrollTo({
            left: width * index,
            behavior: "smooth",
        });
        setCurrentIndex(index);
    };

    const handleNext = () =>
        currentIndex < images.length - 1 && scrollToIndex(currentIndex + 1);

    const handlePrev = () => {
        currentIndex > 0 && scrollToIndex(currentIndex - 1);
    };

    const handleScrollRef = useRef<() => void>(null);

    useEffect(() => {
        const container = containerRef;
        if (!container) return;

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const width = container.clientWidth;
            const index = Math.round(scrollLeft / width);
            setCurrentIndex(index);
        };

        handleScrollRef.current = debounce(handleScroll, 100);

        const scrollListener = () => handleScrollRef.current?.();

        container.addEventListener("scroll", scrollListener);
        return () => {
            container.removeEventListener("scroll", scrollListener);
        };
    }, [containerRef]);

    useEffect(() => {
        scrollToIndex(0);
    }, []);
    return (
        <div ref={setContainerRef} className="w-full relative overflow-hidden">
            <div
                className={clsx(
                    "z-1 hidden absolute px-5 w-full h-12",
                    "md:flex justify-between top-1/2 -translate-y-1/2",
                    "lg:translate-0 lg:space-x-5"
                )}
            >
                <button
                    onClick={handlePrev}
                    className="chevron"
                    disabled={currentIndex === 0}
                    aria-label="prev image"
                >
                    <ChevronLeftIcon />
                </button>
                <button
                    onClick={handleNext}
                    className="chevron"
                    aria-label="next image"
                    disabled={currentIndex === images.length - 1}
                >
                    <ChevronRightIcon />
                </button>
            </div>
            <div
                className="flex overflow-x-scroll snap-x snap-mandatory scroll-container scrollbar-hide w-auto h-full"
                aria-label="image container"
            >
                {images.map((image, i) => (
                    <Image
                        src={image}
                        className="snap-start w-full  aspect-square shrink-0"
                        width={1000}
                        height={1000}
                        key={i}
                        alt="product image"
                    />
                ))}
            </div>
        </div>
    );
};

export default ShowImages;
