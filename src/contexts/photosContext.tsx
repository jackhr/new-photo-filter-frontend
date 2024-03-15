import { Photo } from "../types";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type PhotosProviderProps = {
    children: ReactNode;
    initialPhotoState: Photo[];
}

export interface photosContextInterface {
    photos: Photo[];
    setPhotos: Dispatch<SetStateAction<Photo[]>>;
}

const defaultPhotosState = {
    photos: [],
    setPhotos: (_photos: Photo[]) => { },
} as photosContextInterface;

export const PhotosContext = createContext(defaultPhotosState);

export default function PhotosContextProvider({ children, initialPhotoState }: PhotosProviderProps) {
    const [photos, setPhotos] = useState<Photo[]>(initialPhotoState);

    return (
        <PhotosContext.Provider value={{ photos, setPhotos }}>
            { children }
        </PhotosContext.Provider>
    )
}