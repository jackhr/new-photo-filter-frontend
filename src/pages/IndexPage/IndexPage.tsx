import "./IndexPage.css"
import swal from "sweetalert";
import { Photo } from "../../types";
import { Upload } from "lucide-react";
import { useEffect, useContext, useState } from "react";
import * as photosAPI from "../../utilities/photos-api";
import { PhotosContext } from "../../contexts/photosContext";

export default function IndexPage() {
    const [uploading, setUploading] = useState(true);
    const { photos, setPhotos } = useContext(PhotosContext);
    useEffect(function () {
        async function getPhotos() {
            const res = await photosAPI.getAll();
            console.log(res);
            setPhotos(res.data?.photos as Photo[]);
        }
        getPhotos();
    }, [setPhotos]);

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
            console.log("res:", res);
        }
    }

    const buttonClass = "bg-blue-500 w-52 h-52 rounded-md relative cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out text-white font-bold flex justify-center items-center text-2xl";
    
    const tabClass = "bg-blue-500 w-1/2 text-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-600 active:bg-blue-700 text-white font-bold p-4";

    const activeTabClass = "bg-blue-700 hover:bg-blue-700 active:bg-blue-700";

    return (
        <div className="h-full relative flex flex-col justify-center items-center border-blue-300 border-t-2">
            <div className="absolute top-0 flex w-full">
                <div
                    onClick={() => setUploading(true)}
                    className={`${tabClass} ${uploading ? activeTabClass : ""}`}
                >Upload</div>
                <div
                    onClick={() => setUploading(false)}
                    className={`${tabClass} ${!uploading ? activeTabClass : ""}`}
                >My Photos ({photos.length})</div>
            </div>
            {uploading ? (
                <>
                    <input type="file" id="photo-upload-input" className="hidden" onChange={handleProcessIncomingPhoto} />
                    <h1 className="text-bold font-medium mb-12">Select a photo to begin</h1>
                    <div className="flex flex-col items-center justify-center border-4 border-dashed p-8 rounded-xl cursor-pointer gap-6" onClick={handleImageInputClick}>
                        <Upload size="5rem" className="text-blue-500" />
                        <div className={`${buttonClass} w-64 !h-12 text-xl`}>Select Photo</div>
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    )
}