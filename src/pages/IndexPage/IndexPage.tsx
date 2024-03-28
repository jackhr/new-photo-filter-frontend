import "./IndexPage.css"
import { BeatLoader } from "react-spinners";
import { useContext, useState } from "react";
import UploadPage from "@/pages/UploadPage/UploadPage";
import PhotosPage from "@/pages/PhotosPage/PhotosPage";
import { PhotosContext } from "@/contexts/photosContext";

export default function IndexPage() {
    const [uploading, setUploading] = useState(false);
    const { photos, fetchingPhotos } = useContext(PhotosContext);
    const [ghostPhoto, setGhostPhoto] = useState<string | null>(null);

    const tabClass = "bg-blue-500 w-1/2 text-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-600 active:bg-blue-700 text-white font-bold p-4 h-14 flex items-center m-auto justify-center";
    const activeTabClass = "bg-blue-700 hover:bg-blue-700 active:bg-blue-700";
    const myPhotosCount = fetchingPhotos ? <BeatLoader color="#fff" size={5} /> : photos.length;
    const myPhotosClass = `${tabClass} ${!uploading ? activeTabClass : ""}`;
    const uploadClass = `${tabClass} ${uploading ? activeTabClass : ""}`;

    return (
        <div className="relative flex flex-col justify-center items-center border-blue-300 border-t-2 pt-14 h-full">
            <div className="absolute top-0 flex w-full">
                <div onClick={() => setUploading(false)} className={myPhotosClass}>
                    My Photos ({myPhotosCount})
                </div>
                <div onClick={() => setUploading(true)} className={uploadClass}>
                    Upload
                </div>
            </div>

            {uploading ? (
                <UploadPage setUploading={setUploading} setGhostPhoto={setGhostPhoto} />
            ) : (
                <PhotosPage ghostPhoto={ghostPhoto} setGhostPhoto={setGhostPhoto} />
            )}
        </div>
    )
}