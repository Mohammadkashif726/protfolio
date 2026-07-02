import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    {/* <Navbar />
    <Resume />
    <Footer /> */}
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
