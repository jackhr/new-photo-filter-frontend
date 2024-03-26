import { Photo } from "@/types";
import * as photosAPI from "@/utilities/photos-api";

export function getMimeType(fileName: string) {
    const extensionToMimeType: { [key: string]: string } = {
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.webp': 'image/webp',
        '.pdf': 'application/pdf',
        '.txt': 'text/plain',
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.css': 'text/css',
        '.xml': 'application/xml',
    };

    const extension = fileName.slice(fileName.lastIndexOf('.')).toLowerCase();

    return extensionToMimeType[extension] || 'application/octet-stream';
}

export async function generateFileForOnePhoto(photo: Photo): Promise<Photo> {
    try {
        if (photo.signedUrl && !photo.file) {
            const blobRes = await photosAPI.getPhotoAsBlob(photo.signedUrl);
            const imageFile = new File(
                [blobRes.data as Blob],
                photo.name,
                { type: blobRes.data?.type }
            );
            photo.file = imageFile;
        }
    } catch (error) {
        console.error("Error generating file:", error);
    }
    return photo;
}

export async function generateFileForManyPhotos(photos: Photo[]): Promise<Photo[]> {
    return await Promise.all(photos.map(async (photo) => generateFileForOnePhoto(photo)));
}