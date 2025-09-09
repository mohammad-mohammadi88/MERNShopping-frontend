import { Fragment, type FC } from "react";

const Line = (_: any, i: number) => (
    <div key={i} className="my-3 px-4 w-full">
        <div className="h-2 w-full rounded bg-gray-300" />
    </div>
);
const Icon = (_: any, i: number) => (
    <div key={i} className="size-6 rounded-full bg-gray-300" />
);
const arr = [1, 2, 3, 4, 5, 6];

const Products: FC = () => (
    <div className="bg-white rounded p-8">
        <h1 className="font-bold text-2xl">Products List</h1>
        <div className="space-y-4 animate-pulse mt-8">
            <div className="flex flex-row justify-around items-center">
                {arr.map(Icon)}
            </div>

            {arr.map((_, i) => (
                <Fragment key={i}>
                    <div className="flex flex-row justify-around items-center">
                        {arr.map(Line)}
                    </div>
                    {i < arr.length - 1 && (
                        <div className="h-px w-full bg-gray-300" />
                    )}
                </Fragment>
            ))}
        </div>
    </div>
);

export default Products;
