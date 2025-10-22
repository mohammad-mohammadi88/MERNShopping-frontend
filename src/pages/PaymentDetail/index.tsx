import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";

import { paymentApi } from "@Api";
import { AlertModal, Loading } from "@Components";
import { convertTime } from "@Utils";
import PaymentDatumShow from "./PaymentDatumShow";

const PaymentDetail = () => {
    const id = useParams<{ id: string }>().id!;
    const navigate = useNavigate();

    const { data: payment, isLoading } = useQuery({
        queryKey: ["payment", id],
        staleTime: convertTime(60),
        queryFn: () => paymentApi.getSinglePayment(id),
    });

    // handling api error to show in modal
    const errorDescription = !payment?.ok
        ? payment?.data ||
          payment?.problem ||
          "Unexpected error happend while getting payment"
        : "";

    const isPaymentReady = payment?.ok && !!payment.data;
    return (
        <>
            <AlertModal
                role="error"
                isOpen={!payment?.ok && !!payment?.problem}
                description={errorDescription}
                title="Error"
                onClose={() => navigate("/payment")}
            />
            <Loading loading={isLoading} />
            {isPaymentReady && <PaymentDatumShow {...payment.data!} />}
        </>
    );
};

export default PaymentDetail;
