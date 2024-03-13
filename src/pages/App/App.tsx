import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import About from '../About/About'
import AuthPage from '../AuthPage/AuthPage'
import RootLayout from '../../layouts/Root/RootLayout';
import Index from '../Index/Index';

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/sign-in" element={<AuthPage showLogin={true} />} />
                <Route path="/sign-up" element={<AuthPage showLogin={false} />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />
}

export default App
