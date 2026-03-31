import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Events from './pages/Events';
import Process from './pages/Process';
import ChatWidget from './pages/ChatWidget';
import Terms from './pages/Terms';
import Admin from './pages/Admin';

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
        <Route path="/ChatWidget" element={<ChatWidget />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
