import React from 'react';
import YouTube from 'react-youtube';
import './ProjectModal.css';
import { X, Github, Link, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = React.useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="App-modal-overlay" onClick={onClose}>
      <div className="App-modal" onClick={(e) => e.stopPropagation()}>
        <div className="App-modal-links">
          {project.github && (
            <a href={project.github} className="App-modal-link" target="_blank" rel="noopener noreferrer">
              <Github />
              GitHub
            </a>
          )}
          {project.website && (
            <a href={project.website} className="App-modal-link" target="_blank" rel="noopener noreferrer">
              <Link />
              웹사이트
            </a>
          )}
          <button className="App-modal-close" onClick={onClose}>
            <X />
          </button>
        </div>
        <div className="App-modal-content">
          <h2 className="App-modal-title">{project.title}</h2>
          <div className="App-modal-carousel">
            <img src={project.images[currentImage] || "/placeholder.svg"} alt={`Project screenshot ${currentImage + 1}`} />
            <button className="App-modal-carousel-prev" onClick={prevImage}>
              <ChevronLeft />
            </button>
            <button className="App-modal-carousel-next" onClick={nextImage}>
              <ChevronRight />
            </button>
          </div>
          <div className="App-modal-description">
            <h4>{project.descriptionTitle}</h4>
            {project.description.map((desc, index) => (<p key={index}>{desc}</p>))}
          </div>

          <div className='App-modal-description'>
            <h4>기술 스택</h4>
            <div className="App-modal-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="App-project-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className='App-modal-description'>
            <h4>참고 자료</h4>
            <div>
            <YouTube
                videoId={project.youtube}
                opts={{
                  width: "560",
                  height: "315",
                  playerVars: {
                    autoplay: 0,
                    rel: 0,
                    modestbranding: 1, 
                  },
                }}
                onEnd={(e)=>{e.target.stopVideo(0);}}      
             />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

