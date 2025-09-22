import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import type { Dispatch, FC, SetStateAction } from "react";

interface Props {
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    totalPages: number;
}

const PagePagination: FC<Props> = ({
    page: currentPage,
    setPage,
    totalPages,
}) => {
    const btnClass =
        "size-10 hover:bg-gray-300 border border-r-0 disabled:opacity-60 disabled:cursor-auto disabled:hover:bg-gray-200 border-gray-400 duration-150 cursor-pointer flex justify-center items-center bg-gray-200";
    const PageBtn: FC<{ page: number }> = ({ page }) =>
        page > 0 &&
        page <= totalPages && (
            <button
                onClick={() => setPage(page)}
                className={clsx(
                    btnClass,
                    page === currentPage && "bg-gray-300 hover:bg-gray-400"
                )}
            >
                {page}
            </button>
        );

    const pageArray = [];
    for (let x = currentPage - 2; x <= currentPage + 2; x++) pageArray.push(x);

    return (
        <div className="flex mt-4 md:mt-0">
            <button
                className={btnClass}
                disabled={currentPage <= 1}
                onClick={() => setPage((p) => p - 1)}
            >
                <ChevronLeftIcon height={20} />
            </button>
            {pageArray.map((page) => (
                <PageBtn page={page} key={page} />
            ))}
            <button
                className={clsx(
                    btnClass,
                    "!border-r !border-l-gray-400 disabled:!border-l-gray-600"
                )}
                disabled={currentPage >= totalPages}
                onClick={() => setPage((p) => p + 1)}
            >
                <ChevronRightIcon height={20} />
            </button>
        </div>
    );
};

export default PagePagination;
