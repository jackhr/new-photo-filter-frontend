import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import About from '../About/About'
import Login from '../AuthPage/AuthPage'
import RootLayout from '../../layouts/Root/RootLayout';
import Index from '../Index/Index';
import { useState } from 'react';
import * as UsersService from '../../utilities/users-service';

function App() {
    const [user, setUser] = useState(UsersService.getUser());

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout user={user} setUser={setUser} />}>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login user={user} setUser={setUser} />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />
}

export default App
