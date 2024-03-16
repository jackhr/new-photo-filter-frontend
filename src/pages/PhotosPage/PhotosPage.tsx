import { useContext } from "react"
import UploadPage from "../UploadPage/UploadPage";
import PhotoComponent from "../../components/Photo/Photo";
import { PhotosContext } from "../../contexts/photosContext"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export default function PhotosPage() {
    const { photos } = useContext(PhotosContext);
    return (
        <div className="flex flex-col h-full w-full items-center justify-center">
            {photos.length ? (
                <div className="h-full w-full overflow-auto">
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1200: 4}}
                    >
                        <Masonry className="p-1">
                            {photos.map(photo => (
                                <PhotoComponent key={photo._id} photo={photo} />
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            ) : (
                <UploadPage />
            )}
        </div>
    )
}