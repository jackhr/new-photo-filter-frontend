import swal from "sweetalert";
import { X } from "lucide-react";
import { Photo } from "@/types";
import { useNavigate } from "react-router-dom";
import { MouseEvent, useContext } from "react";
import { deleteOne } from "@/utilities/photos-api";
import { PhotosContext } from "@/contexts/photosContext";

interface PhotoProps {
    photo: Photo;
}

export default function PhotoComponent({ photo }: PhotoProps) {
    const { setPhotos } = useContext(PhotosContext);
    const navigate = useNavigate();
    const handleDelete = async (e: MouseEvent) => {
        e.stopPropagation();
        const deletingPhoto = await swal({
            title: "Are you sure you want to delete this photo?",
            buttons: {
                cancel: true,
                delete: {
                    text: "Delete",
                    value: true,
                    className: "bg-red-500 hover:bg-red-600 text-white font-bold ml-auto",
                },
            },
            icon: "warning",
        });
        if (!deletingPhoto) return;
        const res = await deleteOne(photo._id);
        const icon = res.success ? "success" : "error";
        const title = res.success ? "Success" : "Error";
        const text =  res.data?.message;
        res.success && setPhotos(res.data?.photos as Photo[]);
        swal({ icon, title, text, });
    }
    const goToImgPage = () => navigate(`/photos/${photo._id}`);

    return (
        <div className="relative group rounded-md overflow-hidden h-fit m-1 cursor-pointer" onClick={goToImgPage}>
            <X onClick={e => handleDelete(e)} strokeWidth={3} className="absolute top-3 right-3 bg-white rounded-full flex items-center justify-center h-7 w-7 p-[6px] opacity-0 group-hover:opacity-100" />
            <img key={photo._id} src={photo.sourceURL} alt={photo.name} className="w-full object-cover" />
        </div>
    );
}