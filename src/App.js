import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {
  return (
    <div>
    <Navigation />
    <Routes>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App;
