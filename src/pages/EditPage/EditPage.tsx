import "./EditPage.css";
import { Photo } from "../../types";
import { ChevronLeft, Crop, Filter } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { PhotosContext } from "../../contexts/photosContext";
import { useCallback, useContext, useEffect, useState } from "react";
import ReactAvatarEditor from "../../components/ReactAvatarEditor/ReactAvatarEditor";
import ReactPhotoEditorComponent from "../../components/ReactPhotoEditor/ReactPhotoEditor";

export default function EditPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { photos } = useContext(PhotosContext);
    const [photo, setPhoto] = useState<Photo | undefined>(undefined);
    const [filteredPhoto, setFilteredPhoto] = useState<File | undefined>(undefined);
    const [editMode, setEditMode] = useState('avatar');
    const filterNames = ['original','contrast','grayscale','sepia','vignette','vintage'];
    const goBackToPhotos = useCallback(() => navigate('/', {
        replace: true,
        state: { photosTab: true }
    }), [navigate]);
    
    useEffect(() => {
        const foundPhoto = photos.find(p => p._id === id);
        if (foundPhoto) {
            setPhoto(foundPhoto);
            setFilteredPhoto(foundPhoto.file);
        } else {
            goBackToPhotos();
        }
    }, [id, photos, goBackToPhotos]);

    if (!photo) {
        return <div>Loading...</div>;
    }

    const handleImageChange = (newImage: File) => {
        // setFilteredPhoto(newImage);
    }

    const handleModeChange = () => {
        const newEditMode = editMode === 'avatar' ? 'photo' : 'avatar';
        setEditMode(newEditMode);
    }

    return (
        <div className="flex flex-col items-center justify-center p-8 h-full relative">
            <ChevronLeft className="absolute top-3 left-3 cursor-pointer bg-gray-300 rounded p-1 h-8 w-8" strokeWidth={3} onClick={goBackToPhotos} />
            <div className="absolute top-3 right-3 cursor-pointer bg-gray-300 rounded p-1 h-8 w-8" onClick={handleModeChange}>
                {editMode === 'avatar' ? (
                    <Filter strokeWidth={3} />
                ) : (
                    <Crop strokeWidth={3} />
                )}
            </div>
            <h1 className="mb-6">{photo.name}</h1>
            {editMode === 'avatar' ? (
                <ReactAvatarEditor photo={filteredPhoto} onImageChange={handleImageChange} />
            ) : (
                <>
                    <ReactPhotoEditorComponent photo={filteredPhoto} onImageChange={handleImageChange} />
                    <div className="flex mt-12 gap-12">
                        {filterNames.map(filterName => (
                            <div
                                key={`img-filter-${filterName}`}
                                className={`flex flex-col items-center gap-2 cursor-pointer relative filter-${filterName}`}
                            >
                                <div className="w-12 h-12 rounded flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-gray-100 active:bg-white active:shadow-none relative">
                                    <img className="w-full h-full object-cover" src={photo.sourceURL} alt="" />
                                </div>
                                <span>{filterName}</span>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
