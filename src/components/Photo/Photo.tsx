import { Photo } from "../../types";
import { X } from "lucide-react";

interface PhotoProps {
    photo: Photo;
}

export default function PhotoComponent({ photo }: PhotoProps) {
    return (
        <div className="relative group">
            <X strokeWidth={3} className="absolute top-3 right-3 bg-white rounded-full flex items-center justify-center h-7 w-7 p-[6px] cursor-pointer opacity-0 group-hover:opacity-100" />
            <img key={photo._id} src={photo.sourceURL} alt={photo.name} className="max-h-96" />
        </div>
    );
}