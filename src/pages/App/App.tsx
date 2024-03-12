import { Route, Routes } from 'react-router-dom'
import Index from '../Index/Index'
import './App.css'
import About from '../About/About'
import Navbar from '../../components/Navbar/Navbar'

function App() {

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    )
}

export default App
