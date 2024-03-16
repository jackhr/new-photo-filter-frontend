import swal from "sweetalert";
import { X } from "lucide-react";
import { useContext } from "react";
import { Photo } from "../../types";
import { deleteOne } from "../../utilities/photos-api";
import { PhotosContext } from "../../contexts/photosContext";

interface PhotoProps {
    photo: Photo;
}

export default function PhotoComponent({ photo }: PhotoProps) {
    const { setPhotos } = useContext(PhotosContext);
    const handleDelete = async () => {
        const res = await deleteOne(photo._id);
        const icon = res.success ? "success" : "error";
        const title = res.success ? "Success" : "Error";
        const text =  res.data?.message;
        res.success && setPhotos(res.data?.photos as Photo[]);
        swal({ icon, title, text, });
    }

    return (
        <div className="relative group">
            <X onClick={handleDelete} strokeWidth={3} className="absolute top-3 right-3 bg-white rounded-full flex items-center justify-center h-7 w-7 p-[6px] cursor-pointer opacity-0 group-hover:opacity-100" />
            <img key={photo._id} src={photo.sourceURL} alt={photo.name} className="max-h-96" />
        </div>
    );
}