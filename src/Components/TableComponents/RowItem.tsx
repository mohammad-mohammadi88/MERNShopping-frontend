import clsx from "clsx";
import type { FC, PropsWithChildren } from "react";

import { LoadingLine } from ".";

interface Size {
    SM?: boolean;
    MD?: boolean;
    LG?: boolean;
    XL?: boolean;
    XXL?: boolean;
}
type SizeKeys = keyof Size;
export interface RowItemProps extends Size {
    className?: string;
    item?: boolean;
    hidden?: boolean;
    inVisible?: boolean;
    isHeading?: boolean;
}

const sizeClasses: Record<SizeKeys, [string, string]> = {
    SM: ["sm:hidden", "sm:table-cell"],
    MD: ["md:hidden", "md:table-cell"],
    LG: ["lg:hidden", "lg:table-cell"],
    XL: ["xl:hidden", "xl:table-cell"],
    XXL: ["2xl:hidden", "2xl:table-cell"],
};
type ClassValues = {
    size: SizeKeys;
    value?: boolean;
};
const sizeClassGenerator = (data: ClassValues): string =>
    sizeClasses[data.size][
        // if false it will return hidden class and if true it will return display class
        Number(data.value ?? true)
    ];

const RowItem: FC<PropsWithChildren<RowItemProps>> = ({
    className,
    children,
    inVisible = false,
    hidden = false,
    isHeading = false,
    item = true,
    ...sizes
}) => {
    const Component = (props: any) =>
        isHeading ? <th {...props} /> : <td {...props} />;
    return (
        <Component
            className={clsx(
                "table-row-item",
                hidden && "hidden",
                ...Object.keys(sizes).map((size) =>
                    sizeClassGenerator({
                        size: size as SizeKeys,
                        value: sizes[size as SizeKeys],
                    })
                ),
                inVisible && "invisible",
                className
            )}
            aria-hidden={inVisible}
        >
            {item && children === undefined ? <LoadingLine /> : children}
        </Component>
    );
};

export default RowItem;
