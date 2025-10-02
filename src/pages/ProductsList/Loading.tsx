const Line = () => (
    <div className="loading-table-row-item sm:hidden md:table-cell" />
);
const Icon = () => (
    <td className="size-16 items-center flex justify-center">
        <div className="rounded-full size-12 bg-gray-500" />
    </td>
);
const arr = [1, 2, 3, 4, 5];

const ProductsLoader = () => (
    <tbody className="animate-pulse">
        {arr.map((_, i) => (
            <tr key={i} className="border border-gray-300">
                <Icon />
                <td className="table-row-item">
                    <Line />
                </td>

                <td className="hidden lg:table-cell table-row-item">
                    <Line />
                </td>
                <td className="hidden lg:table-cell table-row-item">
                    <Line />
                </td>
                <td className="hidden xl:table-cell table-row-item">
                    <Line />
                </td>
                <td className="table-row-item sm:hidden md:table-cell !border-r-0">
                    <Line />
                </td>
                <td
                    className="max-w-10 table-row-item invisible"
                    aria-hidden="true"
                >
                    open
                </td>
            </tr>
        ))}
    </tbody>
);

export default ProductsLoader;
