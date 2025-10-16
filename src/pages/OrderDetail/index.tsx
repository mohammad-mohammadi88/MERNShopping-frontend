import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";

import { ordersApi } from "@Api";
import { AlertModal, Loading } from "@Components";
import { convertTime } from "@Utils";
import OrderDatumShow from "./OrderDatumShow";

const OrderDetail = () => {
    const id = useParams().id!;
    const navigate = useNavigate();

    const { data: product, isLoading } = useQuery({
        queryKey: ["product", id],
        queryFn: () => ordersApi.getSingleOrder(id),
        staleTime: convertTime(60),
    });

    // handling api error to show in modal
    const errorDescription = !product?.ok
        ? product?.data ||
          product?.problem ||
          "Unexpected error happend while getting product"
        : "";

    const isProductReady = product?.ok && !!product.data;

    return (
        <>
            <AlertModal
                role="error"
                isOpen={!product?.ok && !!product?.problem}
                description={errorDescription}
                title="Error"
                onClose={() => navigate("/orders")}
            />
            <Loading loading={isLoading} />
            {isProductReady && <OrderDatumShow {...product.data!} />}
        </>
    );
};

export default OrderDetail;
