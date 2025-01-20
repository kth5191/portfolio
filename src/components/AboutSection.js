import { Calendar, Phone, Mail } from 'lucide-react';
import Separator from './Separator';

function AboutSection() {
    return (
      <section className="App-about" id="about">
        <Separator title="About Me" />
        
        <div className="App-about-content">
          <div className="App-profile-image">
            <img src="/picture.jpg" alt="Profile" />
          </div>
          
          <div className="App-profile-info">
            <h3>안녕하세요!</h3>
            <h4>풀스택 개발자 김동훈입니다</h4>
            
            <div className="App-contact-info">
              <div className="App-contact-item">
                <Calendar className="App-contact-icon" />
                <span>1999.05.28</span>
              </div>
              <div className="App-contact-item">
                <Phone className="App-contact-icon" />
                <span>010-4663-2737</span>
              </div>
              <div className="App-contact-item">
                <Mail className="App-contact-icon" />
                <span>kth5541915@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
  
        {/* <div className="App-about-description">
          <div className="App-description-box">
            <h5>신중한 개발자</h5>
            <p>협업을 위한 코드를 구현하기 위해 끊임없이 노력합니다.</p>
            <p>하나의 문제를 다양한 시각에서 접근하는 것을 좋아합니다.</p>
          </div>
          
          <div className="App-description-box">
            <h5>성장장하는 개발자</h5>
            <p>명확한 목표를 설정하고, 이를 달성하기 위해 </p>
            <p></p>
          </div>
        </div> */}
      </section>
    );
  }

  export default AboutSection;