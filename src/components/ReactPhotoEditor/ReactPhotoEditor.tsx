import { FC as ReactFC } from 'react';
import { EditorProps } from '@/types';
import { ReactPhotoEditor } from 'react-photo-editor';

const ReactPhotoEditorComponent: ReactFC<EditorProps> = ({ photo, onImageChange }) => {
    return (
        photo instanceof File ? (
            <div className='w-32 h-32'>
                <ReactPhotoEditor
                    file={photo}
                    onSaveImage={onImageChange}
                    open={true}
                />
            </div>
        ) : (
            <div>Loading...</div>
        )
    );
}


export default ReactPhotoEditorComponent;