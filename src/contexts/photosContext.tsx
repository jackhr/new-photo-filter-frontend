import { Photo } from "../types";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type PhotosProviderProps = {
    children: ReactNode;
    initialPhotoState: Photo[];
}

export interface photosContextInterface {
    photos: Photo[];
    setPhotos: Dispatch<SetStateAction<Photo[]>>;
    fetchingPhotos: boolean;
    setFetchingPhotos: Dispatch<SetStateAction<boolean>>;
}

const defaultPhotosState = {
    photos: [],
    setPhotos: (_photos: Photo[]) => { },
    fetchingPhotos: false,
    setFetchingPhotos: (_fetchingPhotos: boolean) => { }
} as photosContextInterface;

export const PhotosContext = createContext(defaultPhotosState);

export default function PhotosContextProvider({ children, initialPhotoState }: PhotosProviderProps) {
    const [photos, setPhotos] = useState<Photo[]>(initialPhotoState);
    const [fetchingPhotos, setFetchingPhotos] = useState(false);

    return (
        <PhotosContext.Provider value={{ photos, setPhotos, fetchingPhotos, setFetchingPhotos }}>
            { children }
        </PhotosContext.Provider>
    )
}