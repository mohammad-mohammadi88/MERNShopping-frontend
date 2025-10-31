import { RowItem } from "@TableComponents";

const arr = [1, 2, 3, 4, 5];

const ShipmentsLoading = () => (
    <tbody
        className="animate-pulse"
        children={arr.map((_, i) => (
            <tr key={i}>
                <RowItem />
                <RowItem />
                <RowItem hidden MD />
                <RowItem hidden LG />
                <RowItem hidden XL />
            </tr>
        ))}
    />
);

export default ShipmentsLoading;
