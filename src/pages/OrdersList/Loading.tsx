import { RowItem } from "@TableComponents";

const arr = [1, 2, 3, 4, 5];

const OrdersLoader = () => (
    <tbody className="animate-pulse">
        {arr.map((_, i) => (
            <tr key={i} className="border border-gray-300">
                <RowItem />
                <RowItem hidden MD />
                <RowItem hidden LG />
                <RowItem hidden XL />
                <RowItem />
                <RowItem inVisible />
            </tr>
        ))}
    </tbody>
);

export default OrdersLoader;
