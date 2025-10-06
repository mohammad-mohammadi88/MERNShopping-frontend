import { RowItem } from "@TableComponents";

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
                <RowItem />
                <RowItem hidden LG />
                <RowItem hidden LG />
                <RowItem hidden XL />
                <RowItem SM={false} MD />
                <RowItem inVisible children="open" />
            </tr>
        ))}
    </tbody>
);

export default ProductsLoader;
