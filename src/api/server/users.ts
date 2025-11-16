import { User } from "@Types";
import serverFetch from "./server";

const getSelfInfo = () => serverFetch<User>("users/self");

export default {
    getSelfInfo,
};
