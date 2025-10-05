import type { FC } from "react";

import {
    PagePagination,
    PerPagePagination,
    StatusPagination,
    type PagePaginationProps,
    type PerPagePaginationProps,
    type StatusPaginationProps,
} from ".";

interface Props {
    perPageProps: PerPagePaginationProps;
    pageProps: PagePaginationProps;
    statusProps?: StatusPaginationProps | undefined;
}

const Pagination: FC<Props> = ({ statusProps, pageProps, perPageProps }) => (
    <div className="flex mt-7 w-full flex-col md:flex-row md:justify-between">
        {statusProps && <StatusPagination {...statusProps} />}
        <PerPagePagination {...perPageProps} />
        <PagePagination {...pageProps} />
    </div>
);

export default Pagination;
