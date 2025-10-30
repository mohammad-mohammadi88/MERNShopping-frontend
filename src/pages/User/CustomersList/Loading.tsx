import { RowItem } from "@Components";

const arr = [1, 2, 3, 4, 5];

const UserLoading = () => (
    <tbody className="animate-pulse">
        {arr.map((i) => (
            <tr key={i} className="border border-gray-300">
                <RowItem />
                <RowItem />
                <RowItem hidden MD />
                <RowItem hidden LG />
                <RowItem hidden XL />
            </tr>
        ))}
    </tbody>
);
export default UserLoading;
