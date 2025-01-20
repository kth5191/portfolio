import React, {useState} from 'react';
import { Github, FileText, ChevronDown } from 'lucide-react';
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';
import SkillSection from './SkillSection';
import ExperienceSection from './ExperienceSection';

function Portfolio() {
  function Nav() {
    return (
      <nav className="App-nav">
        <div className="App-nav-links">
          <a href="https://github.com/kth5191" className="App-nav-link">
            <Github className="App-nav-icon" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </nav>
    );
  }

  function ScrollIndicator() {
    const scrollToContent = () => {
      const firstSection = document.querySelector("#about");
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <div className="App-scroll-indicator" onClick={scrollToContent}>
        <ChevronDown className="App-scroll-icon" />
      </div>
    );
  }

  function SideNav() {
    const [activeLink, setActiveLink] = useState('about');
  
    const handleClick = (link) => {
      setActiveLink(link);
      const element = document.getElementById(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <nav className="App-side-nav">
        <a 
          href="#about" 
          className={`App-side-nav-link ${activeLink === 'about' ? 'active' : ''}`}
          onClick={() => handleClick('about')}
        >
          About Me
        </a>
        <a 
          href="#project" 
          className={`App-side-nav-link ${activeLink === 'project' ? 'active' : ''}`}
          onClick={() => handleClick('project')}
        >
          Project
        </a>
        <a 
          href="#skill" 
          className={`App-side-nav-link ${activeLink === 'skill' ? 'active' : ''}`}
          onClick={() => handleClick('skill')}
        >
          Skill
        </a>
        <a 
          href="#experience" 
          className={`App-side-nav-link ${activeLink === 'experience' ? 'active' : ''}`}
          onClick={() => handleClick('experience')}
        >
          Experience
        </a>
      </nav>
    );
  }
  
  return (
    <div className="Portfolio">
      <Nav />
      <SideNav />
      <main className="App-main">
        <div className="App-hero">
          <h1 className="App-title">FULL STACK</h1>
          <div className="App-subtitle">
            <p>풀스택 개발자</p>
            <p className="App-name">김동훈</p>
          </div>
        <hr></hr>
        <p className='App-hero-description '>신중함을 바탕으로 세심한 검토와 철저한 준비를 통해 </p>
        <p className='App-hero-description '>프로젝트를 수행하는 개발자입니다.</p>
        </div>
        <AboutSection />
        <ProjectSection/>
        <SkillSection/>
        <ExperienceSection/>
      </main>
      <ScrollIndicator />
    </div>
  );
}

export default Portfolio;
