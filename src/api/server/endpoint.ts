type AddParam = (param: string) => string;
type AddQueries = (queries: Record<string, any>) => string;

type Endpoint = {
    endpoint: string;
    addParam: AddParam;
    addQueries: AddQueries;
};

export type NewDatumError = { errors: string[] } | string;

type EndpointGenerator = (endpoint: string) => Endpoint;
const queryGenerator = (queries: Record<string, any>) =>
    Object.entries(queries)
        .map(([key, value]) => key + "=" + value)
        .join("&");

const endpointGenerator: EndpointGenerator = (endpoint) => ({
    endpoint,
    addParam: (param: string) => `${endpoint}/${param}`,
    addQueries: (queries: Record<string, any>) =>
        `${endpoint}?${queryGenerator(queries)}`,
});
export default endpointGenerator;
