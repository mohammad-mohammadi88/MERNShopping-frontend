import type { FC } from "react";

import AddCategoryLogic from "@/Forms/logic/AddCategoryLogic";

const NewCategory: FC = () => {
    return (
        <div className="bg-white p-4 rounded border">
            <h1 className="text-xl font-bold pb-4">New Category</h1>
            <AddCategoryLogic handleSubmit={(v) => console.log(v)} />
        </div>
    );
};

export default NewCategory;
