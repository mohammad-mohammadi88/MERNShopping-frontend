import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Category } from "@Types";
import Link from "next/link";
import { FC } from "react";

export interface NavbarAndFooterProps {
    categories: string | Category[];
}

const Footer: FC<NavbarAndFooterProps> = ({ categories }) => (
    <footer className="w-screen bg-gray-700 text-white relative bottom-0">
        <div className="container mx-auto flex flex-wrap">
            {typeof categories === "object" && (
                <div className="w-full md:w-1/2 p-4">
                    <span className="border-b pb-2 pr-2 text-xl">
                        Categories
                    </span>
                    <ul className="mt-5">
                        {categories.slice(0, 7).map(({ title, _id }) => (
                            <li
                                key={_id}
                                className="text-lg hover:text-gray-300 duration-200"
                            >
                                <Link
                                    className="flex items-center"
                                    href={`/?q=${_id}`}
                                >
                                    {title}{" "}
                                    <ArrowRightIcon
                                        className="ml-2"
                                        height={15}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center items-center text-center">
                <h4 className="text-2xl font-bold pb-3">Clab</h4>
                <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora laudantium deleniti dolor vitae corrupti. Facere,
                    deleniti! Porro, officiis quia provident fugit minima veniam
                    quo dicta, rerum alias nemo necessitatibus repellat!
                </p>
            </div>
        </div>
        <h5 className="border-t py-2 text-xl font-bold text-center">
            Provided By Mohammad Mohammadi
        </h5>
    </footer>
);

export default Footer;
