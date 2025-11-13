import clsx from "clsx";
import Image from "next/image";

import { header } from "@Images";

const hClass = "h-[33.333vh] md:h-[50vh]";
const Header = () => (
    <header className={clsx("w-screen relative", hClass)}>
        <Image
            className={clsx("fixed", hClass)}
            src={header}
            alt="Header image"
        />
        <div className="z-10 absolute size-full bg-white/10 flex justify-center items-center">
            <div className="flex items-center flex-col w-1/3">
                <p className="text-left font-bold text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam nam est vel possimus recusandae debitis voluptatum
                    dolor, sed ducimus minus quos, quia rerum, iusto ratione
                    cupiditate quas tenetur error incidunt.
                </p>
                <a
                    href="#courses"
                    className="bg-primary text-white hover:text-black p-3 mt-2 rounded hover:brightness-80 duration-200"
                >
                    See Courses
                </a>
            </div>
        </div>
    </header>
);

export default Header;
