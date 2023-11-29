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
    Python: <FaPython />,
    Django: <BiLogoDjango />,
    Flask: <BiLogoFlask />,
    PostgreSQL: <BiLogoPostgresql />,
    TypeScript: <BiLogoTypescript />,
    React: <FaReact />,
    Bootstrap: <FaBootstrap />,
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    Javascript: <IoLogoJavascript />,
    SQLAlchemy: <SiSqlalchemy />,
    Git: <FaGitAlt />,
    Github: <IoLogoGithub />,
    Postman: <SiPostman />,
    Render: <SiRender />,
    Netlify: <BiLogoNetlify />
};

const getIcon = (techName) => {
  return iconsMap[techName];
};

const getIconsJSX = ({techStack}) => {
  return techStack.map((icon, index) => {
      return (
          <div key={index}>
              {getIcon(icon)}
          </div>
      );
  });
};

const getIconWithName = (techName) => {
  const IconOnly = iconsMap[techName];
  return (
    <>
    <div id="tech-name">{techName}</div>
    <div id="icon-only">{IconOnly}</div>
    </>
  );
};

const getIconsJSXWithName = ({techStack}) => {
  return techStack.map((icon, index) => {
    return (
      <div key={index}>
          {getIconWithName(icon)}
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
      <Route path='/skills' element={<Skills skillList={skillsData.skills} getIconsJSXWithName={getIconsJSXWithName}></Skills>} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App;
