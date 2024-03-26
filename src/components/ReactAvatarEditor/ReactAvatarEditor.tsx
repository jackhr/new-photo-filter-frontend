import { FC as ReactFC } from 'react';
import { EditorProps } from '@/types';
import AvatarEditor from 'react-avatar-editor';

const ReactAvatarEditor: ReactFC<EditorProps> = ({ photo }) => {
    return (
        photo ? (
            <AvatarEditor
                image={photo}
                width={250}
                height={250}
                border={50}
                color={[255, 255, 255, 0.6]} // RGBA
                scale={1.2}
                rotate={0}
            />
        ) : (
            <div>Loading...</div>
        )
    );
}


export default ReactAvatarEditor;