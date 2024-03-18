import swal from "sweetalert";
import { Photo } from "../../types";
import { ChevronLeft } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { PhotosContext } from "../../contexts/photosContext";
import { useCallback, useContext, useEffect, useState } from "react";

export default function EditPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { photos } = useContext(PhotosContext);
    const [photo, setPhoto] = useState<Photo | undefined>(undefined);
    const goBackToPhotos = useCallback(() => navigate('/', {
        replace: true,
        state: { photosTab: true }
    }), [navigate]);
    
    useEffect(() => {
        const foundPhoto = photos.find(p => p._id === id);
        if (foundPhoto) {
            setPhoto(foundPhoto);
        } else {
            goBackToPhotos();
        }
    }, [id, photos, goBackToPhotos]);

    if (!photo) {
        return <div>Loading...</div>;
    }

    const handleFilterClick = (filter: string) => {
        swal({
            title: filter,
            text: "This may take a few seconds...",
            icon: "info",
        });
    }

    const boxClass = "w-12 h-12 rounded bg-blue-500 text-white flex items-center justify-center cursor-pointer hover:bg-blue-600 active:bg-blue-700";

    return (
        <div className="flex flex-col items-center justify-center p-8 h-full relative">
            <ChevronLeft className="absolute top-3 left-3 cursor-pointer bg-gray-300 rounded p-1 h-8 w-8" strokeWidth={3} onClick={goBackToPhotos} />
            <h1 className="mb-6">{photo.name}</h1>
            <img className="h-full" src={photo.sourceURL} alt={photo.name} />
            <div className="flex mt-12 gap-12">
                {[1, 2, 3, 4, 5].map(i => (
                    <div
                        key={i}
                        className={boxClass}
                        onClick={() => handleFilterClick(`filter-${i}`)}
                    >{i}</div>
                ))}
            </div>
        </div>
    );
}
