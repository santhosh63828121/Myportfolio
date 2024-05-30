import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../components/style.css'; 
import { BiSend, BiPhone } from 'react-icons/bi';

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail} from "react-icons/md";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p9u2qoc', 'template_439q7in', form.current, {
        publicKey: '0v-1udiIaLbLu9ZYl',
      })
      .then(


        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  }; 

  return (
    
    <section className="contact" id="contact">
      
      <div className="contact-text">
        <h2>Contact <span>Me</span></h2>
        <h4>Let's work Together</h4>
        <p>Hey there! Whether you have a project in mind, a question about my work, or just want to say hello, I'd love to hear from you. Feel free to drop me a message using the form below, and I'll get back to you as soon as possible. Let's connect and create something amazing together!</p>
      <div className="contact-list">
        <li><BiSend size={20} /> santhoshdhamotharan333@gmail.com</li>
        <li><BiPhone  size={20} /> +91 6382812159</li>
      </div>
      <div className="contact-icons">
          <a href="mailto:santhoshdhamotharan333@gamil.com"><MdEmail style={{ '--i': 10 }} /></a>
          <a href="https://www.linkedin.com/in/santhoshdhamu03/"><FaLinkedin style={{ '--i': 8 }} /></a>
          <a href="https://github.com/santhosh63828121"><FaGithub  style={{ '--i': 7 }} /></a>
          <a href="https://wa.me/6382812159"><FaWhatsapp style={{ '--i': 9 }} /></a>
      </div>
      </div>

      <div className="contact-form">
        <form action="" ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Enter Your Name" required name="from_name" />
          <input type="email" placeholder="Enter Your Email" required name="from_email" />
          <input type="text" placeholder="Enter Your Subject" name='from_Subject' />
          <textarea cols="40" rows="10" placeholder="Enter Your Message" name="message"></textarea>
          <input type="submit" className="send" value="Send"/>
        </form>
      </div>
      
    </section>
    
  );
}

export default Contact;
