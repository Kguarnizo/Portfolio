import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Contact from './components/pages/Contact';
import projectData from './data/projects.json';
import skillsData from './data/skills.json';
import { FaPython, FaReact, FaBootstrap, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { BiLogoDjango, BiLogoPostgresql, BiLogoTypescript, BiLogoFlask, BiLogoNetlify } from "react-icons/bi";
import { IoLogoJavascript, IoLogoGithub  } from "react-icons/io5";
import { SiSqlalchemy, SiPostman, SiRender } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";

const iconsMap = {
    Python: <FaPython icon={FaPython} />,
    Django: <BiLogoDjango icon={BiLogoDjango} />,
    Flask: <BiLogoFlask icon={BiLogoFlask} />,
    PostgreSQL: <BiLogoPostgresql icon={BiLogoPostgresql} />,
    TypeScript: <BiLogoTypescript icon={BiLogoTypescript} />,
    React: <FaReact icon={FaReact} />,
    Bootstrap: <FaBootstrap icon={FaBootstrap} />,
    HTML: <FaHtml5 icon={FaHtml5} />,
    CSS: <FaCss3Alt icon={FaCss3Alt} />,
    Javascript: <IoLogoJavascript icon={IoLogoJavascript} />,
    SQLAlchemy: <SiSqlalchemy icon={SiSqlalchemy} />,
    Git: <FaGitAlt icon={FaGitAlt} />,
    Github: <IoLogoGithub icon={IoLogoGithub} />,
    Postman: <SiPostman icon={SiPostman} />,
    Render: <SiRender icon={SiRender} />,
    Netlify: <BiLogoNetlify icon={BiLogoNetlify} />
};

const getIconComponent = (icon) => {
  return iconsMap[icon];
};

const getIconsJSX = ({techStack}) => {
  return techStack.map((icon, index) => {
      return (
          <div key={index}>
              {getIconComponent(icon)}
          </div>
      );
  });
};

function App() {
  return (
    <div className="App">
    <Navigation />
    <Routes>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects projectList={projectData.projects} getIconsJSX={getIconsJSX}></Projects>} />
      <Route path='/skills' element={<Skills skillList={skillsData.skills} getIconsJSX={getIconsJSX}></Skills>} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App;
