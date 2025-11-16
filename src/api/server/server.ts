import { serverUrl } from "@/constants";

type RequestType = { type?: "ISR"; revalidate?: number } | { type: "SSR" };

// 5 minutes
const revalidate = 5 * 60;

type Result<T> = (
    | {
          ok: true;
          data: T;
      }
    | {
          ok: false;
          data?: string;
      }
) & { statusText: string };

const serverFetch = async <T>(
    endpoint: string,
    requestType: RequestType = { type: "ISR" },
    init: RequestInit = { next: { revalidate } }
): Promise<Result<T>> => {
    try {
        if (requestType.type === "SSR") init = {};

        const response = await fetch(serverUrl + endpoint, init);
        const data = await response[response.ok ? "json" : "text"]();

        const { ok, statusText } = response;

        return { ok, statusText, data };
    } catch (e) {
        const statusText =
            e instanceof Error
                ? e.message
                : typeof e == "string"
                ? e
                : "Unexpected error happend while fetching";
        return { ok: false, statusText };
    }
};

export default serverFetch;
