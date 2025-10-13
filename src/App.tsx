import { Bars3BottomLeftIcon } from "@heroicons/react/20/solid";
import { useState, type FC } from "react";

import { Routing, Sidebar } from "@Components";
import { useWindowWidth } from "@Hooks";

const App: FC = () => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const windowWidth = useWindowWidth();
    return (
        <div className="bg-gray-200 sm:py-4 min-h-screen">
            <nav className="bg-white flex items-center py-2 pl-2 sm:hidden">
                <button
                    className="cursor-pointer"
                    onClick={() => setShowSidebar(true)}
                >
                    <Bars3BottomLeftIcon height={28} />
                </button>
            </nav>
            <div className="flex pt-8 container mx-auto">
                <Sidebar
                    show={showSidebar || windowWidth >= 640}
                    close={() => setShowSidebar(false)}
                />
                <div className="w-full sm:w-1/2 md:w-2/3 xl:w-3/4 px-4 sm:pr-0">
                    <div className="page-layout">
                        <Routing />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
