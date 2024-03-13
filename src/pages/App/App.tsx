import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import About from '../About/About'
import AuthPage from '../AuthPage/AuthPage'
import RootLayout from '../../layouts/Root/RootLayout';
import Index from '../Index/Index';
import AuthPageContextProvider from '../../contexts/authPageContext';
// import { useContext } from 'react';
// import { UserContext } from '../../contexts/userContext';

function App() {
    // const { user } = useContext(UserContext);

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/login"
                    element={
                        <AuthPageContextProvider initialState={true}>
                            <AuthPage />
                        </AuthPageContextProvider>
                    }
                />
            </Route>
        )
    );

    return <RouterProvider router={router} />
}

export default App
