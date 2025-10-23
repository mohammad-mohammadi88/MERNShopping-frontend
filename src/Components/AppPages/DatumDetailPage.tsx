import { useQuery } from "@tanstack/react-query";
import type { ApiResponse } from "apisauce";
import type { FC } from "react";
import { useNavigate, useParams } from "react-router";

import { AlertModal, Loading } from "@Components";
import { convertTime } from "@Utils";

interface Props<T> {
    datumName: string;
    apiCall: (id: string) => Promise<ApiResponse<T, string>>;
    navigateUrl: string;
    DatumItem: FC<T>;
}
const DatumDetailPage = <T,>({
    datumName,
    DatumItem,
    apiCall,
    navigateUrl,
}: Props<T>) => {
    const id = useParams().id!;
    const navigate = useNavigate();

    const { data: datum, isLoading } = useQuery({
        queryKey: [datumName, id],
        queryFn: () => apiCall(id),
        staleTime: convertTime(60),
    });

    // handling api error to show in modal
    const errorDescription = !datum?.ok
        ? datum?.data ||
          datum?.problem ||
          `Unexpected error happend while getting ${datumName}`
        : "";

    const isDatumReady = datum?.ok && !!datum.data;

    return (
        <div className="p-4">
            <AlertModal
                role="error"
                isOpen={!datum?.ok && !!datum?.problem}
                description={errorDescription}
                title="Error"
                onClose={() => navigate(navigateUrl)}
            />
            <Loading loading={isLoading} />
            {isDatumReady && <DatumItem {...datum.data!} />}
        </div>
    );
};
export default DatumDetailPage;
