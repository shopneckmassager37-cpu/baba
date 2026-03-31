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
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Process" element={<Process />} />
        <Route path="/ChatWidget" element={<ChatWidget />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
