import type { FC } from "react";

interface Props {
    title: string;
}
const CategoryAttrItem: FC<Props> = ({ title }) => (
    <div className="w-full">{title}</div>
);

export default CategoryAttrItem;
