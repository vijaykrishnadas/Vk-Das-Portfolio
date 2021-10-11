import React from 'react'
import "./projects.css"

import proj1 from "../project-img/1.JPG"
import proj2 from "../project-img/2.JPG"

const Projects = () => {
    return (
        <div className="projects">
            <div className="project-title">
                 <h1>Projects Showcase</h1>
            </div>
            <div className="projects-wrapper">
                <div className="project-item">
                <div className="project-card">
                    <div className="project-browser">
                        <div className="project-circle"></div>
                        <div className="project-circle"></div>
                        <div className="project-circle"></div>
                    </div>
                    <img className="project-img" src={proj2} alt="" />
                </div>
                <p className="project-description">This is a sample website on Coronavirus.Being a blog website it holds all information about Coronavirus.</p>
                </div>
                <div className="line"></div>
                <div className="project-item">
                <div className="project-card">
                    <div className="project-browser">
                        <div className="project-circle"></div>
                        <div className="project-circle"></div>
                        <div className="project-circle"></div>
                    </div>
                    <img className="project-img" src={proj1} alt="" />
                </div>
                <p className="project-description">This is a sample website for an educational institute. The focus of the website is to teach kids about coding.</p>
                </div>
            </div>
            <h3 className="demo">Kindly contact me for a live demo..</h3>
        </div>
    )
}

export default Projects
