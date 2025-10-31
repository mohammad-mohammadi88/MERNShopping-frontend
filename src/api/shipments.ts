import type { ShipmentStatusValue } from "@Constants";
import type {
    ApiListQueries,
    FullShipment,
    GetDataWithPagination,
    Shipment,
} from "@Types";
import apiClient, { endpointGenerator } from "./client";

const { endpoint, addParam } = endpointGenerator("shipments");

const getShipments = (status: string | null, params?: ApiListQueries) =>
    apiClient.get<GetDataWithPagination<Shipment>, string>(
        endpoint,
        status ? { status, ...params } : { ...params }
    );

const getShipment = (id: string) =>
    apiClient.get<FullShipment, string>(addParam(id));

const updateShipmentStatus = (id: string, status: ShipmentStatusValue) =>
    apiClient.patch<Shipment, string>(addParam(id), { status });

export default {
    getShipment,
    getShipments,
    updateShipmentStatus,
};
