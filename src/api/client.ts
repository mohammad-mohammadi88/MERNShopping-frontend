import { create } from "apisauce";

import defaults from "@/constants";

const apiClient = create({
    baseURL: defaults.serverUrl,
    withCredentials: true,
});

type Endpoint = {
    endpoint: string;
    addParam: (param: string) => `${string}/${string}`;
};
type EndpointGenerator = (endpoint: string) => Endpoint;
export const endpointGenerator: EndpointGenerator = (endpoint) => ({
    endpoint,
    addParam: (param) => `${endpoint}/${param}`,
});

export default apiClient;
