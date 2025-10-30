import { usersApi } from "@Api";
import { Button } from "@Components";

const Index = () => {
    const handleLogin = async () => {
        const { data } = await usersApi.login({
            email: "mohammaddev09@gmail.com",
            password: "Moh@mm@d!8809",
        });
        console.log(data);
    };
    return (
        <div className="page-layout !w-full">
            <Button title="Login" onClick={handleLogin} role="send" />
        </div>
    );
};

export default Index;
