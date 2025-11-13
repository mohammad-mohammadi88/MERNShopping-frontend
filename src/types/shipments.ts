import type { ShipmentStatusValue } from "@Constants";
import type { ID, Order, TimeStamp, User } from ".";

export interface Shipment extends ID, TimeStamp {
    user: User;
    order: string;
    selectedDate: Date;
    deliveredAt: Date | null;
    note?: string;
    status: ShipmentStatusValue;
}
export interface FullShipment extends Omit<Shipment, "user" | "order"> {
    user: string;
    order: Order;
}
