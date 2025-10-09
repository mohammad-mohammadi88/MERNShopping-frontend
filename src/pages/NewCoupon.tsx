import type { FC } from "react";

import { couponsApi, usersApi } from "@Api";
import { AlertModal, Loading, NewDatumPage } from "@Components";
import { AddCouponLogic } from "@Forms";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const NewCoupon: FC = () => {
    const navigate = useNavigate();
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ["users"],
        queryFn: () => usersApi.getAllUsers(),
        // one hour
        staleTime: 3_600_000,
    });
    if (isLoading || !data?.ok)
        return (
            <div className="page-layout">
                <Loading loading={isLoading} />
                <AlertModal
                    isOpen={isSuccess && !data.ok}
                    onClose={() => navigate("/")}
                    role="error"
                    title="There is an error"
                    description={
                        (!data?.ok && data?.data) || "Unexpected error happend"
                    }
                />
            </div>
        );
    return (
        <NewDatumPage
            NewDatumLogic={(props) => (
                <AddCouponLogic {...props} users={data?.data!?.data} />
            )}
            apiCall={couponsApi.postCoupon}
            datumName="Coupon"
            queryName="coupons"
        />
    );
};

export default NewCoupon;
