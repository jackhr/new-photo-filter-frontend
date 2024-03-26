import swal from "sweetalert";
import { Photo } from "@/types";
import { useContext } from "react";
import { Upload } from "lucide-react";
import * as photosAPI from "@/utilities/photos-api";
import { PhotosContext } from "@/contexts/photosContext";

export default function UploadPage({ setUploading }: { setUploading?: (uploading: boolean) => void }){
    const { setPhotos } = useContext(PhotosContext);
    const handleImageInputClick = () => {
        document.getElementById("photo-upload-input")?.click();
    }
    const handleProcessIncomingPhoto = async () => {
        const input = document.getElementById('photo-upload-input');
        if (input) {
            const photo = (input as HTMLInputElement).files?.[0];
            if (!photo) return;
            const img = new Image();
            img.src = URL.createObjectURL(photo);
            img.className = "max-h-96 m-auto";
            const upload = await swal({
                title: "Are you sure you want to upload this photo?",
                buttons: {
                    cancel: true,
                    upload: {
                        text: "Upload",
                        value: true,
                        className: "bg-blue-500 hover:!bg-blue-600 text-white font-bold ml-auto",
                    },
                },
                className: "upload-swal",
                content: {
                    element: img,
                }
            });
            if (!upload) return;
            
            const formData = new FormData();
            formData.append("photo", photo);
            formData.append("name", photo.name);
            
            const res = await photosAPI.create(formData);
            swal({
                title: res.success ? "Success" : "Error",
                text: res.data?.message,
                icon: res.success ? "success" : "error",
            });
            if (res.success) {
                setPhotos(res.data?.photos as Photo[]);
                setUploading && setUploading(false);
            }
        }
    }

    return (
        <>
            <input type="file" id="photo-upload-input" className="hidden" onChange={handleProcessIncomingPhoto} />
            <h1 className="text-bold font-medium mb-12">Select a photo to begin</h1>
            <div className="flex flex-col items-center justify-center border-4 border-dashed p-8 rounded-xl cursor-pointer gap-6" onClick={handleImageInputClick}>
                <Upload size="5rem" className="text-blue-500" />
                <div className="bg-blue-500 w-64 h-12 rounded-md relative cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out text-white font-bold flex justify-center items-center text-xl">Select Photo</div>
            </div>
        </>
    )
}