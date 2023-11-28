import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Contact from './components/pages/Contact';
import projectData from './data/projects.json'


function App() {
  return (
    <div className="App">
    <Navigation />
    <Routes>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects projectList={projectData.projects}></Projects>} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App;
