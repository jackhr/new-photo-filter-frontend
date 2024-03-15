import './App.css'
import IndexPage from '../IndexPage/IndexPage';
import { useContext } from 'react';
import AuthPage from '../AuthPage/AuthPage'
import ErrorPage from '../ErrorPage/ErrorPage';
import LandingPage from '../LandingPage/LandingPage';
import RootLayout from '../../layouts/Root/RootLayout';
import { UserContext } from '../../contexts/userContext';
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom'

function App() {
    const { user } = useContext(UserContext);

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
                <Route path="/" element={user ? <IndexPage /> : <LandingPage />} />
                <Route path="/sign-in" element={<AuthPage showLogin={true} />} />
                <Route path="/sign-up" element={<AuthPage showLogin={false} />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />
}

export default App
