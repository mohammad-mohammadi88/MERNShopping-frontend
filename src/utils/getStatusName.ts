export default <T extends object>(statuses: T, status: T[keyof T]) => {
    type StatusKeys = keyof T;
    return Object.keys(statuses).find(
        (c) => statuses[c as StatusKeys] === status
    ) as StatusKeys;
};
