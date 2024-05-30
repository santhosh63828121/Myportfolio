import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
// import bgimg from '../images/homeimg.jpg'
import back from '../images/home.jpg'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { FaFacebook, FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import '../components/style.css';

const Home = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Frontend Web Developer.', 'Web Designer.', 'Web Developer.'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      className="home"
   
      id="home"
    >
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Santhosh Dhamotharan</h1>
        <h3>And I'm a <span className="text" ref={typedElement}></span></h3>
        <p>I'm a web developer with extensive experience for over 2 years.
          <br />Expertise is to create and design websites, frontend design, and much more...</p>
        <div className="home-sci">
          <a href="mailto:santhoshdhamotharan333@gamil.com"><MdEmail style={{ '--i': 10 }} /></a>
          <a href="https://www.linkedin.com/in/santhoshdhamu03/"><FaLinkedin style={{ '--i': 8 }} /></a>
          <a href="https://github.com/santhosh63828121"><FaGithub  style={{ '--i': 7 }} /></a>
          <a href="https://wa.me/6382812159"><FaWhatsapp style={{ '--i': 9 }} /></a>
        </div>
        <a href="#" className="btn-box">More About Me</a>
      </div>
      <div className='home-content2'>
        <img src={back} alt="" />
      </div>
    </section>
  );
}

export default Home;
