const Line = () => (
    <div className="loading-table-row-item sm:hidden md:table-cell" />
);

const arr = [1, 2, 3, 4, 5];

const OrdersLoader = () => (
    <tbody className="animate-pulse">
        {arr.map((_, i) => (
            <tr key={i} className="border border-gray-300">
                <td className="table-row-item">
                    <Line />
                </td>
                <td className="hidden md:table-cell table-row-item">
                    <Line />
                </td>
                <td className="hidden lg:table-cell table-row-item">
                    <Line />
                </td>
                <td className="hidden xl:table-cell table-row-item">
                    <Line />
                </td>
                <td className="hidden sm:table-cell table-row-item">
                    <Line />
                </td>
                <td
                    className="max-w-10 table-row-item-no-border invisible"
                    aria-hidden="true"
                >
                    open
                </td>
            </tr>
        ))}
    </tbody>
);

export default OrdersLoader;
