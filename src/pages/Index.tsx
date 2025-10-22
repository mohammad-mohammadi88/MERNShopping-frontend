import { paymentApi } from "@/api";
import { Button } from "@/Components";
import { useState } from "react";

const Index = () => {
    const [url, setUrl] = useState<string>("");
    const handlePayment = async () => {
        const { data, ok } = await paymentApi.createSession();
        setUrl(data as string);
        if (ok) {
            window.location.href = data as string;
        }
    };
    return (
        <div className="page-layout !w-full">
            <p>{url}</p>
            <Button title="add payment" onClick={handlePayment} role="send" />
        </div>
    );
};

export default Index;
