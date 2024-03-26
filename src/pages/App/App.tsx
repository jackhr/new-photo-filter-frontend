import './App.css'
import { Photo } from '@/types';
import { useContext, useEffect } from 'react';
import AuthPage from '@/pages/AuthPage/AuthPage';
import EditPage from '@/pages/EditPage/EditPage';
import RootLayout from '@/layouts/Root/RootLayout';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import IndexPage from '@/pages/IndexPage/IndexPage';
import * as photosAPI from '@/utilities/photos-api';
import { UserContext } from '@/contexts/userContext';
import LandingPage from '@/pages/LandingPage/LandingPage';
import { PhotosContext } from '@/contexts/photosContext';
import { generateFilesForManyPhotos } from '@/utilities/photos-service';
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom'

function App() {
    const { user } = useContext(UserContext);
    const { setPhotos } = useContext(PhotosContext);
    useEffect(function () {
        async function getPhotos() {
            const res = await photosAPI.getAll();
            const photos = await generateFilesForManyPhotos(res.data?.photos as Photo[]);
            setPhotos(photos);
        }
        getPhotos();
    }, [setPhotos]);

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
                <Route path="/" element={user ? <IndexPage /> : <LandingPage />} />
                <Route path="/sign-in" element={<AuthPage showLogin={true} />} />
                <Route path="/sign-up" element={<AuthPage showLogin={false} />} />
                <Route path="/photos/:id" element={<EditPage />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />
}

export default App
