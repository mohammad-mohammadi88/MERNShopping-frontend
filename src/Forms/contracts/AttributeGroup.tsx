import { FieldArray } from "formik";
import { memo, type FC } from "react";

import type { FormCategoryGroup } from "@Types";
import { Button, CategoryAttribute, Field } from ".";

interface Props {
    group: FormCategoryGroup;
    baseName: string;
    remove: () => void;
}
const AttributeGroup: FC<Props> = ({ group, baseName, remove }) => (
    <div className="border p-4 mb-2 w-full">
        <Field
            label="Group title"
            className="w-full"
            name={`${baseName}.title`}
        />

        <FieldArray name={`${baseName}.attrs`}>
            {({ push, remove }) => (
                <div className="w-full">
                    {group.attrs.map((_, j) => (
                        <CategoryAttribute
                            key={j}
                            name={`${baseName}.attrs[${j}]`}
                            remove={() => remove(j)}
                        />
                    ))}
                    <Button
                        className="mt-4"
                        onClick={() => push("")}
                        title="Attribute"
                    />
                </div>
            )}
        </FieldArray>

        <Button title="Category Group" role="delete" onClick={remove} />
    </div>
);

export default memo(AttributeGroup);
