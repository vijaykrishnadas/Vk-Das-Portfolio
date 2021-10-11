import React from 'react'
import "./hero.css"

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
               <div className="hero-left-wrapper">
                <p className="hero-intro">Hello, My name is </p>
                    <h1 className="hero-name">Vijay Krishna Das</h1>
                    <div className="hero-title">
                        <div className="hero-title-wrapper">
                            <div className="hero-title-item">Web Developer</div>
                            <div className="hero-title-item">UI/UX Designer</div>
                            <div className="hero-title-item">App Developer</div>
                            <div className="hero-title-item">Singer</div>
                            <div className="hero-title-item">Guitarist</div>
                        </div>
                    </div>
                    <div className="head-description">
                    <span className="w"><h2>W</h2></span>elcome to my online space ! <br />
                    I <b>design</b> and <b>develop</b> awesome <b>web</b> /<b> mobile</b> Apps.
                    </div>
                </div>
               </div>
            <div className="hero-right" >
                <div className="hero-bg">
                    
                </div>
            </div>
        </div>
    )
}

export default Hero
