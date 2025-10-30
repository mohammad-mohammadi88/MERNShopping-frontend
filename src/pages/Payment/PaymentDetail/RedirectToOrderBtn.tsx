import { ArrowRightIcon } from "@heroicons/react/20/solid";
import type { FC } from "react";
import { Link } from "react-router";

import { RippleBtn } from "@Components";

interface Props {
    id: string;
}

const RedirectToOrderBtn: FC<Props> = ({ id }) => (
    <Link to={`/order/${id}`} className="w-auto">
        <RippleBtn className="p-2.5 mt-6 text-lg pr-8 space-x-2 relative rounded-full items-center bg-red-500 text-white hover:bg-red-700">
            See Related Order{" "}
            <ArrowRightIcon
                className="absolute top-1/2 -translate-y-1/2 right-3"
                height={20}
            />
        </RippleBtn>
    </Link>
);

export default RedirectToOrderBtn;
