import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Process from './pages/Process';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Process" element={<Process />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
