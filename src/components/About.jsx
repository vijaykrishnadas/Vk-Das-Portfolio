import React from 'react'
import "./about.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faPaintBrush, faGraduationCap } from '@fortawesome/free-solid-svg-icons';


const About = () => {
    return (
        <div className="about">
            <div className="about-wrapper">
                <div className="about-1">
                <span><FontAwesomeIcon icon={faSmile} className="about-icon"></FontAwesomeIcon><span className="about-text">about me</span></span>
                    <p className="about-description">Hi, My name is Vijay Krishna Das. <br /> <br />
                    I'm a Web/App Designer and a Full Stack Developer <br /> <br />
                    based in Assam, India.</p>
                </div>
                <div className="about-2">
                <span><FontAwesomeIcon icon={faPaintBrush}  className="about-icon"></FontAwesomeIcon><span className="about-text">inspiration</span></span>
                    <p className="about-description">I have great passion for designing websites and would love to create for web and mobile users. <br /> <br />
                    I can help bring out your creative ideas to the World
                   </p>
                </div>
                <div className="about-3">
                <span><FontAwesomeIcon icon={faGraduationCap}  className="about-icon"></FontAwesomeIcon><span className="about-text">qualification</span></span>
                    <p className="about-description">I have done my BCA (Bachelors in Computer Application) from Cotton University. <br /> <br />
                    I am currently pursuing my MCA (Masters in Computer Application) from Dibrugarh Univeristy. 
                  </p>
                </div>
                <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#EDEDED" fill-opacity="1" d="M0,128L48,112C96,96,192,64,288,85.3C384,107,480,181,576,192C672,203,768,149,864,154.7C960,160,1056,224,1152,256C1248,288,1344,288,1392,288L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            </div>
        </div>
    )
}

export default About
