import "./IndexPage.css"
import { Photo } from "../../types";
import { useLocation } from "react-router-dom";
import UploadPage from "../UploadPage/UploadPage";
import PhotosPage from "../PhotosPage/PhotosPage";
import { useEffect, useContext, useState } from "react";
import * as photosAPI from "../../utilities/photos-api";
import { PhotosContext } from "../../contexts/photosContext";

export default function IndexPage() {
    const location = useLocation();
    const [uploading, setUploading] = useState(location.state?.photosTab ? false : true);
    const { photos, setPhotos } = useContext(PhotosContext);
    useEffect(function () {
        async function getPhotos() {
            const res = await photosAPI.getAll();
            console.log(res);
            setPhotos(res.data?.photos as Photo[]);
        }
        getPhotos();
    }, [setPhotos]);
    

    const tabClass = "bg-blue-500 w-1/2 text-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-600 active:bg-blue-700 text-white font-bold p-4 h-14";

    const activeTabClass = "bg-blue-700 hover:bg-blue-700 active:bg-blue-700";

    return (
        <div className="relative flex flex-col justify-center items-center border-blue-300 border-t-2 pt-14 h-full">
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

            {uploading ? <UploadPage setUploading={setUploading} /> : <PhotosPage /> }
        </div>
    )
}