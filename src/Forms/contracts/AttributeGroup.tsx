import { FieldArray } from "formik";
import { memo, type FC } from "react";

import type { CategoryGroup } from "@/types";
import { Attribute, Button, Field } from ".";

interface Props {
    group: CategoryGroup;
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
            {({ push: pushAttr, remove: removeAttr }) => (
                <div className="w-full">
                    {group.attrs.map((_, j) => (
                        <Attribute
                            key={j}
                            baseName={`${baseName}.attrs[${j}]`}
                            removeAttr={() => removeAttr(j)}
                        />
                    ))}
                    <Button
                        className="mt-4"
                        onClick={() =>
                            pushAttr({
                                title: "",
                                description: "",
                                filterable: false,
                                isMultiple: false,
                            })
                        }
                        title="Attribute"
                    />
                </div>
            )}
        </FieldArray>

        <Button title="Category Group" role="delete" onClick={remove} />
    </div>
);

export default memo(AttributeGroup);
