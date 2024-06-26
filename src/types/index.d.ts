export type MainRes = {
    data: Partial<any> | null;
    success: boolean
}

type GhostPhoto = string | null;

export interface GhostPhotoProps {
    ghostPhoto: GhostPhoto;
}

export interface PhotosPageProps {
    ghostPhoto: GhostPhoto;
    setGhostPhoto: (ghostPhoto: GhostPhoto) => void;
}

export interface UploadPageProps {
    setUploading?: (uploading: boolean) => void;
    setGhostPhoto: (ghostPhoto: GhostPhoto) => void;
}

export interface LoginFormProps {
    showLogin: boolean;
    setShowLogin: (showLogin: boolean) => void;
}

export interface UserSignUpData {
    name: string;
    email: string;
    password: string;
}

export interface UserLoginData {
    email: string;
    password: string;
}

export interface EditorProps {
    photo: File | string | undefined;
    onImageChange: (newPhoto: File) => void;
}

type User = {
    _v: number;
    _id: string;
    name: string;
    email: string;
    password?: string;
    createdAt: string;
    updatedAt: string;
}

type Photo = {
    _v: number;
    _id: string;
    name: string;
    user: User;
    sourceURL: string;
    newEditURLs: string[];
    AWSKey: string;
    signedUrl?: string;
    file?: File;
    createdAt: string;
    updatedAt: string;
}