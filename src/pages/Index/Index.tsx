import "./Index.css"
import swal from "sweetalert";
import * as photosAPI from "../../utilities/photos-api";

export default function Index() {
    const handleImageInputClick = () => {
        const label = document.getElementById("photo-upload-label");
        label && label.click();
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
    
    const className = "bg-blue-500 w-52 h-52 rounded-md relative cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out text-white font-bold flex justify-center items-center text-2xl";

    return (
        <>
            <div className="grid grid-cols-2 grid-rows-2 gap-8">
                <div className={className} onClick={handleImageInputClick}>Upload</div>
                <div className={className}>Experiment</div>
                <div className={className}>My Photos</div>
                <div className={className}>My Templates</div>
                <label id="photo-upload-label" htmlFor="photo-upload-input"></label>
                <input type="file" id="photo-upload-input" className="hidden" onChange={handleProcessIncomingPhoto} />
            </div>
        </>
    )
}