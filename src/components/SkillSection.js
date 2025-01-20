import React from 'react';
import Separator from './Separator';
import './SkillSection.css';

// Import icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma, FaJava } from 'react-icons/fa';
import { SiNodedotjs,SiSpring, SiMysql, SiMariadb } from 'react-icons/si';

const SkillCategory = ({ title, skills }) => (
  <div className="skill-category">
    <h3 className="skill-category-title">{title}</h3>
    <div className="skill-icons">
      {skills.map((skill, index) => (
        <div key={index} className="skill-icon">
          {skill.icon}
          <span className="skill-name">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const SkillSection = () => {
  const skillCategories = [
    {
      title: "프론트엔드",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
      ],
    },
    {
      title: "백엔드",
      skills: [
        { name: "NodeJS", icon: <SiNodedotjs /> },
        { name: "Spring", icon: <SiSpring /> },
        { name: "Java", icon: <FaJava /> },
      ],
    },
    {
      title: "데이터베이스",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MariaDB", icon: <SiMariadb /> },
      ],
    },
    {
      title: "협업 / 관리 도구",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Figma", icon: <FaFigma /> },
      ],
    },
  ];

  return (
    <section className="skill-section" id="skill">
      <Separator title="Skill" />
      {skillCategories.map((category, index) => (
        <SkillCategory key={index} title={category.title} skills={category.skills} />
      ))}
    </section>
  );
};

export default SkillSection;

