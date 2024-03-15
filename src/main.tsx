import './index.css';
import React from 'react';
import App from './pages/App/App';
import ReactDOM from 'react-dom/client';
import { getUser } from './utilities/users-service';
import UserContextProvider from './contexts/userContext';
import PhotosContextProvider from './contexts/photosContext';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <UserContextProvider initialUserState={getUser()}>
            <PhotosContextProvider initialPhotoState={[]}>
                <App />
            </PhotosContextProvider>
        </UserContextProvider>
    </React.StrictMode>,
);
