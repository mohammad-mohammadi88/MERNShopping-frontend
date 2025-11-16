import type { FullShipment } from "@Types";
import serverFetch from "./server";

const endpoint = (id: string) => "shipments/" + id;

const getShipment = (id: string) => serverFetch<FullShipment>(endpoint(id));

export default {
    getShipment,
};
