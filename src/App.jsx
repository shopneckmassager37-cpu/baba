import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Events from './pages/Events';
import Process from './pages/Process';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Process" element={<Process />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
