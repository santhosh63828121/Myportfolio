import React from 'react';
import '../components/style.css'; 
import aboutimg from '../images/Picsart11.png'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={aboutimg} alt="About Me" />
      </div>
      <div className="about-text">
        <h2>About<span>Me</span></h2>
        <h4>Python Full Stack Developer</h4>
        <p>Hello! I'm Santhosh, a passionate Python Full Stack Developer with expertise in Django, Flask, React.js, and REST APIs.
          With hands-on experience in end-to-end web application development, I specialize in building responsive UI, backend automation,
          and optimizing performance. My journey includes working at PRM Roadways Pvt Ltd as an Online Executive, where I developed Python
          automation scripts for logistics data validation, and interning at Uniq Technologies, where I built full-stack applications with
          integrated API workflows. I have strong problem-solving skills and experience in real-time applications, debugging, and workflow
          automation. Proficient in Python, JavaScript, SQL databases (MySQL, SQLite), and modern web technologies, I focus on delivering
          production-ready features with clean, maintainable code and excellent user experiences.</p>
        <a href="#" className="btn-box">More About Me</a>
      </div>
    </section>
  );
}

export default About;