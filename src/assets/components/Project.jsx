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
              <h5>Eye Care Optics Admin Web App</h5>
              <p>Developed CRM using React, Flask, and SQLite for managing customers, dealers, stock, and billing. Features include reminders for feedback and check-ups, data export to Excel/PDF, daily auto Google Drive backup, and WhatsApp auto-message integration for appointment follow-ups.</p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>
          <div className="row">
            <img src={Firstimg} alt="Project 2" />
            <div className="layer">
              <h5>School Discipline Tracking System</h5>
              <p>Built a QR-based system using React, Flask, and SQLite to track and log real-time student discipline events. Features include severity level assignments, admin dashboard for viewing student history and reports, and mobile-friendly UI for efficient teacher-side usage.</p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>
          <div className="row">
            <img src={therdimg } alt="Project 3" />
            <div className="layer">
              <h5>Vi-Tec Solutions Company Website</h5>
              <p>Developed the official website for Vi-Tec Solutions & Academy using HTML, CSS, and React with responsive UI. Created sections for mission, courses, trainers, contact, and registration forms. Ensured SEO readiness and mobile-first design for better online presence.</p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;