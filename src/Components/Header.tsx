const Header = () => (
    <header>
        <div className="size-full bg-white/10 flex justify-center items-center">
            <div className="flex items-center flex-col w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <p className="text-left font-bold text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam nam est vel possimus recusandae debitis voluptatum
                    dolor, sed ducimus minus quos, quia rerum, iusto ratione
                    cupiditate quas tenetur error incidunt.
                </p>
                <a
                    href="#courses"
                    className="bg-primary text-white hover:text-black p-3 mt-4 rounded hover:brightness-80 duration-200"
                >
                    See Courses
                </a>
            </div>
        </div>
    </header>
);

export default Header;
