import type { FC } from "react";

import CategoriesListLoading from "./Loading";

const CategoriesList: FC = () => (
    <div className="bg-white w-full rounded p-8">
        <h1 className="font-bold text-2xl">Categories List</h1>
        <table className="w-full space-y-4 mt-8">
            <thead className="w-full">
                <tr className="w-full">
                    <th className="flex-1 pb-3 pl-3 text-left">Product Name</th>
                    <th className="flex-1 pb-3 pl-3 text-left">
                        Product Count
                    </th>
                    <th className="flex-1 invisible" aria-hidden="true">
                        open btn col
                    </th>
                </tr>
            </thead>
            <CategoriesListLoading />
        </table>
    </div>
);

export default CategoriesList;
