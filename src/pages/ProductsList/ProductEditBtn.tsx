import { Button } from "@/Components";
import type { FC } from "react";
import { useNavigate } from "react-router";

interface Props {
    id: string;
}

const ProductEditBtn: FC<Props> = ({ id }) => {
    const navigate = useNavigate();
    return (
        <Button
            role="edit"
            className="block"
            title="Product"
            onClick={() => navigate("/edit-product/" + id)}
        />
    );
};

export default ProductEditBtn;
