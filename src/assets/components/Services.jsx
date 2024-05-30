import React from 'react';
import '../components/style.css'; 

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h1 className="sub-title1">My<span>Services</span></h1>
        <div className="services-list">
          <div className='boxhead'>
            <i className='bx bx-code' style={{ color: '#00eeff' }}></i>
            <h2>Web Design</h2>
            <p>We create custom, responsive websites that reflect your brand's unique identity. Our stunning, functional designs ensure engaging user experiences and drive conversions. Using the latest technologies, we build websites optimized for performance and accessibility across all devices. </p>
            <a href="#" className="read">Learn more</a>
          </div>
          <div  className='boxhead'>
            <i className='bx bx-crop' style={{ color: '#00eeff' }}></i>
            <h2>UI/UX Design</h2>
            <p>We design intuitive, visually appealing interfaces that enhance user satisfaction. Prioritizing user needs, we ensure seamless interactions through thorough research, prototyping, and testing. Let us help you deliver exceptional experiences across all devices.</p>
            <a href="#" className="read">Learn more</a>
          </div>
          <div  className='boxhead'>
            <i className='bx bxl-apple' style={{ color: '#00eeff' }}></i>
            <h2>Graphic Design</h2>
            <p>Description: We create visually striking designs that effectively communicate your brand's message. From logos to marketing materials, our designs leave a lasting impression. Combining creativity with strategic thinking, we ensure every element serves its purpose. </p>
            <a href="#" className="read">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;