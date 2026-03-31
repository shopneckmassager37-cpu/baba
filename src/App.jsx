import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Process from './pages/Process';
import ChatWidget from './pages/ChatWidget';
import Admin from './pages/Admin';
import Terms from './pages/Terms';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/process" element={<Process />} />
        <Route path="/chat" element={<ChatWidget />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App