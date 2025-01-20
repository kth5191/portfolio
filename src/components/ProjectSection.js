import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import Separator from './Separator';

function ProjectSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      image: 'http://kth5191.github.io/portfolio/site1/pic1.png',
      images: ["http://kth5191.github.io/portfolio/site1/pic1.png"],
      tags: ["MySQL", "Java", "JavaScript", "Phaser3", "MVC2"],
      title: "웹 게임 매쉬업 포털 사이트",
      date: "2023년",
      team: "4인 팀 프로젝트",
      descriptionTitle: "프로젝트 설명",
      description:
        ["다양한 웹 게임을 모아 놓은 웹사이트 플랫폼으로, 랭킹 시스템을 이용해 다른 사람과 경쟁할 수 있습니다."],
      github: "https://github.com/kth5191/GameProject",
      youtube: "agui0ODIBg8"
    },
    {
      image: 'http://kth5191.github.io/portfolio/site2/pic1.png',
      images: ["http://kth5191.github.io/portfolio/site2/pic1.png", "http://kth5191.github.io/portfolio/site2/pic2.png"],
      tags: ["Spring MVC", "Java", "Java Script", "MySQL", "MyBatis"],
      title: "그룹웨어",
      date: "2023년",
      team: "5인 팀 프로젝트",
      descriptionTitle: "프로젝트 설명",
      description:
        [
          "회사를 위한 그룹웨어 플랫폼입니다. 업무 관리, 일정 관리, 커뮤니케이션 등의 기능을 제공합니다.",
          "보안을 위해 회원가입은 관리자에 의해서만 가능합니다.",
          "근퇴 관리, 스케줄 관리, 결재 기능 등 회사 생활을 위한 다양한 기능을 제공합니다."
        ],
        github: "https://github.com/kth5191/Groupware_Project",
        youtube: "meuwV1J-W0E"
    },
    {
      image: 'http://kth5191.github.io/portfolio/site3/pic1.png',
      images: ["http://kth5191.github.io/portfolio/site3/pic1.png", "http://kth5191.github.io/portfolio/site3/pic2.png"],
      tags: ["Java", "Java Script", "MySQL", "React", "JPA"],
      title: "부동산 플랫폼",
      date: "2023년",
      team: "6인 팀 프로젝트",
      descriptionTitle: "프로젝트 설명",
      description:
        [
          "대학생들을 위한 부동산 플랫폼입니다. 대학 주변의 매물을 찾고, 리뷰나 정보를 공유할 수 있습니다.",
          "사용자는 일반 고객, 공인중개사, 관리자로 나뉘며 공인중개사는 관리자의 승인 이후 로그인이 가능합니다.",
          "고객은 지도와 필터 기능을 이용해 원하는 매물을 찾고, 문의 할 수 있습니다.",
          "공인중개사는 매물을 내놓고, 문의 받은 매물 정보를 확인하거나 고객에게 연락할 수 있습니다."
        ],
        github: "https://github.com/kth5191/daebbang_springboot",
        youtube: "hf6M54FsEkw"
    },
    // 다른 프로젝트 데이터 추가...
  ];

  function ProjectCard({ image, tags, title, description, onClick }) {
    return (
      <div className="App-project-card" onClick={onClick}>
        <div className="App-project-image">
          <img src={image || "/placeholder.svg"} alt={title} />
        </div>
        <div className="App-project-content">
          <div className="App-project-tags">
          {tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="App-project-tag">
              {tag}
            </span>
          ))}
          </div>
          <h3 className="App-project-title">{title}</h3>
          <p className="App-project-description">{description[0]}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="App-project" id="project">
      <Separator title="Project" />

      <div className="App-project-tabs">
        <button className="App-project-tab active">프로젝트</button>
      </div>

      <div className="App-project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            onClick={() => openModal(project)}
          />
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
}

export default ProjectSection;
