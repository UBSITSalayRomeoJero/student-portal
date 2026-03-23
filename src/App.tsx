import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from "./pages/Services";
import BookRequest from './pages/BookRequest';
import EventFeedback from './pages/EventFeedback';

function App() {

  return (
    <Router>
      <Navbar />
      <div className='containter=py 4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="bookrequest" element={<BookRequest />} />
          <Route path="eventfeedback" element={<EventFeedback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App