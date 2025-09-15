export default async (image: string): Promise<File> => {
    const response = await fetch(image);
    const blob = await response.blob();
    const name = encodeURIComponent(image);
    return new File([blob], name, { type: blob.type });
};
