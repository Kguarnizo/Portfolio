import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Skills from './components/pages/Skills';
import Contact from './components/pages/Contact';


function App() {
  return (
    <div className="App">
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
