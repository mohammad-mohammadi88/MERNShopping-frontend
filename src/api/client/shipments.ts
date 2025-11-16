import { Shipment } from "@Types";
import apiClient from "./client";

const endpoint = "shipments";
interface NewShipment {
    order: string;
    selectedDate: Date;
    note: string | undefined;
}
const addShipment = (data: NewShipment) =>
    apiClient.post<Shipment, string>(endpoint, data);

export default {
    addShipment,
};
