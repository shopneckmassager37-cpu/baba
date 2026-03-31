import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

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
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/process" element={<Process />} />
        <Route path="/chatwidget" element={<ChatWidget />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/admin" element={<Admin />} />
        {/* Redirect uppercase routes for backwards compatibility */}
        <Route path="/Home" element={<Navigate to="/" replace />} />

        <Route path="/Contact" element={<Navigate to="/contact" replace />} />
        <Route path="/About" element={<Navigate to="/about" replace />} />
        <Route path="/Events" element={<Navigate to="/events" replace />} />
        <Route path="/Process" element={<Navigate to="/process" replace />} />
        <Route path="/Terms" element={<Navigate to="/terms" replace />} />
        <Route path="/Admin" element={<Navigate to="/admin" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App