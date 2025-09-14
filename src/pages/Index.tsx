import { Progress } from "@/Components";
import { useEffect, useState, type FC } from "react";

const Index: FC = () => {
    const [progress, setProgress] = useState<number>(0);
    useEffect(() => {
        if (progress >= 1) return;
        const timer = setTimeout(() => {
            setProgress((c) => c + 0.01);
        }, 100);
        return () => {
            clearTimeout(timer);
        };
    }, [progress]);
    return (
        <div className="bg-white w-full p-10">
            <Progress progress={progress} />
        </div>
    );
};

export default Index;
