import { useContext } from "react"
import { PhotosContext } from "../../contexts/photosContext"
import UploadPage from "../UploadPage/UploadPage";
import PhotoComponent from "../../components/Photo/Photo";

export default function PhotosPage() {
    const { photos } = useContext(PhotosContext);
    return (
        <div className="flex flex-col h-full w-full items-center justify-center">
            <div></div>
            {photos.length ? (
                <div className="h-full w-full overflow-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 w-full h-full max-w-screen-xl m-auto">
                        {photos.map(photo => (
                            <PhotoComponent key={photo._id} photo={photo} />
                        ))}
                    </div>
                </div>
            ) : (
                <UploadPage />
            )}
        </div>
    )
}