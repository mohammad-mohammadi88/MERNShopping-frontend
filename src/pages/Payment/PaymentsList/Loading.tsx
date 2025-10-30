import { RowItem } from "@TableComponents";

const arr = [1, 2, 3, 4, 5];

const PaymentLoading = () => (
    <tbody className="animate-pulse">
        {arr.map((v) => (
            <tr key={v} className="border border-gray-300">
                <RowItem />
                <RowItem hidden MD />
                <RowItem hidden XL />
                <RowItem hidden LG />
                <RowItem />
            </tr>
        ))}
    </tbody>
);

export default PaymentLoading;
