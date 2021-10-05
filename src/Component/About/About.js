// About part 
import React from 'react';
// About css import section 
import './About.css';
import logo from '../../images/abt1.png'
import image from '../../images/abt2.png'
const About = () => {
    return (
        <div className="body">
            <div className="about-part">
                <div className="about">
                    <h1>Welcome to <samp className="welcome-text">Rohima Collegiate School</samp></h1>
                    <p>School is the first playground to start education. Everybody has some sweet memory about his school. I am not different from it. Now I share my memories through.</p>
                </div>
                <img className="fast-img" src={logo} alt="" />
            </div>
            <div className="about-part">
                 <img className="fast-img" src={image} alt="" />
                <div className="about">
                    <h1>
                        Our Mission
                    </h1>
                    <p>School is the first playground to start education. Everybody has some sweet memory about his school. I am not different from it. Now I share my memories through.</p>
                </div> 
            </div>
        </div>
    );
};

export default About;