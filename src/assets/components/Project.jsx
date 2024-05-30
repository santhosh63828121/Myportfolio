import React from 'react';
import '../components/style.css'; 
import Firstimg from '../images/UIUX.jpg'
import secimg from '../images/1687.jpg'
import therdimg from '../images/online.jpg'

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="main-text">
        <h2>Latest <span>Projects</span></h2>
        <div className="portfolio-content">
          <div className="row">
            <img src={secimg} alt="Project 1" />
            <div className="layer">
              <h5>UI/UX Design</h5>
              <p>We create custom, responsive websites that reflect your brand's unique identity. Our stunning, functional designs ensure engaging user experiences and drive conversions. Using the latest technologies, we build websites optimized for performance and accessibility across all devices. </p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>
          <div className="row">
            <img src={Firstimg} alt="Project 2" />
            <div className="layer">
              <h5>UI/UX Design</h5>
              <p>We design intuitive, visually appealing interfaces that enhance user satisfaction. Prioritizing user needs, we ensure seamless interactions through thorough research, prototyping, and testing. Let us help you deliver exceptional experiences across all devices.</p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>
          <div className="row">
            <img src={therdimg } alt="Project 3" />
            <div className="layer">
              <h5>UI/UX Design</h5>
              <p>Description: We create visually striking designs that effectively communicate your brand's message. From logos to marketing materials, our designs leave a lasting impression. Combining creativity with strategic thinking, we ensure every element serves its purpose.</p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;