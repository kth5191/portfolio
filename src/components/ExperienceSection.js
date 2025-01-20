import React from "react"
import Separator from "./Separator"
import "./ExperienceSection.css"

const ExperienceItem = ({ title, subtitle, period, details }) => (
  <div className="experience-item">
    <div className="experience-header">
      <div className="experience-title-group">
        <h3 className="experience-title">{title}</h3>
        <h4 className="experience-subtitle">{subtitle}</h4>
        <span className="experience-period">{period}</span>
      </div>
      
    </div>
    <ul className="experience-details">
      {details.map((detail, index) => (
        <li key={index} className="experience-detail-item">
          {detail}
        </li>
      ))}
    </ul>
  </div>
)

const ExperienceSection = () => {
  const experiences = [
    {
      title: "K-Digital Traning",
      subtitle: "자바 스프링 리액트로 완성하는 클라우드 활용 풀스택 개발 교육",
      period: "2023.07 - 2024.01",
      details: [
        "Java, Spring, React 등 다양한 풀스택 기술 학습",
        "팀 프로젝트 3회 수행",
      ],
    },
    {
      title: "공주대학교",
      subtitle: "컴퓨터공학 소프트웨어학과 졸업",
      period: "2018.03 - 2024.08",
      details: [
        "학점 3.8/4.5",
        "정보처리기사 자격 취득"
      ],
    },
  ]

  return (
    <section className="experience-section" id="experience">
      <Separator title="Experience" />
      <div className="experience-container">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={index}
            title={experience.title}
            subtitle={experience.subtitle}
            period={experience.period}
            details={experience.details}
          />
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection

