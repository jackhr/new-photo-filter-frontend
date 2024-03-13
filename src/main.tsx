import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App/App';
import './index.css';
import UserContextProvider from './contexts/userContext';
import { getUser } from './utilities/users-service';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <UserContextProvider initialUserState={getUser()}>
            <App />
        </UserContextProvider>
    </React.StrictMode>,
);
