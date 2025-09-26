export default {
    serverUrl: import.meta.env.VITE_SERVER_URL!,
    maxGalleryImageCount: 3,
};
export * from "./comment";
export * from "./coupon";
export * from "./order";
export * from "./payment";
export * from "./product";
export * from "./shipment";
export { default as sidebarItems } from "./sidebarItems";
