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
        <h4>Frontend Developer</h4>
        <p>Hello! I'm Santhosh, a passionate and detail-oriented Frontend Web Developer with a strong foundation in web design.
          With over 2 years of hands-on experience, I have honed my skills in creating visually appealing and user-friendly websites.
          My journey began with a fascination for blending creativity with technology, and it has evolved into a career where I strive
          to bring ideas to life through elegant and responsive designs. Proficient in HTML, CSS, and JavaScript, I specialize in crafting
          dynamic and interactive user interfaces. A keen eye for aesthetics coupled with a solid understanding of design principles, I excel
          in creating visually stunning layouts and graphics. Adept at crafting user-centric designs, I focus on creating interfaces that
          prioritize usability and enhance the overall user experience.</p>
        <a href="#" className="btn-box">More About Me</a>
      </div>
    </section>
  );
}

export default About;