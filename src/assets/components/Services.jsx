import React from 'react';
import '../components/style.css'; 

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h1 className="sub-title1">My<span>Services</span></h1>
        <div className="services-list">
          <div className='boxhead'>
            <i className='bx bx-code-alt' style={{ color: '#00eeff' }}></i>
            <h2>Full Stack Development</h2>
            <p>Building end-to-end web applications using Django, Flask, and React.js with integrated REST APIs. Expertise in backend logic, database operations, responsive UI components, and delivering production-ready features optimized for performance and scalability.</p>
            <a href="#" className="read">Learn more</a>
          </div>
          <div  className='boxhead'>
            <i className='bx bx-bot' style={{ color: '#00eeff' }}></i>
            <h2>Backend Automation</h2>
            <p>Developing Python automation scripts for data validation, workflow automation, and reducing manual workload. Building backend utilities for system operations, creating automation tools for repetitive tasks including data entry, reporting, and system checks.</p>
            <a href="#" className="read">Learn more</a>
          </div>
          <div  className='boxhead'>
            <i className='bx bx-data' style={{ color: '#00eeff' }}></i>
            <h2>Database Design & APIs</h2>
            <p>Designing and implementing database solutions using MySQL and SQLite with complex queries, joins, and optimizations. Building RESTful APIs with proper authentication, debugging system issues, and ensuring data integrity for real-time applications.</p>
            <a href="#" className="read">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;