import { create } from "apisauce";

import defaults from "@/constants";

const apiClient = create({ baseURL: defaults.serverUrl });

export default apiClient;
