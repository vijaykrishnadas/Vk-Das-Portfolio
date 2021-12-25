import React from 'react'
import "./techstack.css"

import ai from "../img/ai.png"
import xd from "../img/adobe-xd.png"
import photoshop from "../img/adobe-photoshop.png"
import figma from "../img/figma.png"
import html from "../img/html.png"
import css from "../img/css.png"
import js  from "../img/js.png"
import react from "../img/react-js.png"
import reactn from "../img/react-native-app.png"
import flutter  from "../img/flutter.png"
import node from "../img/node-js.png"
import express from "../img/expressjs.png"
import mongo from "../img/mongodb.png"
import firebase from "../img/firebase.png"
import mysql from "../img/mysql.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler, faTools, faLaptopCode, faServer } from '@fortawesome/free-solid-svg-icons';

import { } from '@fortawesome/free-brands-svg-icons'

const TechStack = () => {
    return (
        <div className="tech-stack">
          <span ><FontAwesomeIcon className="tech-stack-title-icon" icon={faTools}/><span className="tech-stack-title"> Tech Stack</span></span>
          <div className="tech-stack-wrapper">
            <div className="tech-stack-row">
              <div className="tech-stack-left">
              <FontAwesomeIcon className="tech-stack-icon" icon={faPencilRuler}/>
              <h3>Designer</h3>
              <p className="tech-stack-description">Im focused in creating a UI that is <b>A</b>esthetically Appealing, <b>S</b>imple and <b>B</b>eautiful to Look at.</p>
              <div className="line"></div>
              <h3 className="tech-stack-role">Design Tools</h3>
                  <div className="tools">
                  <img className="item-icons" src={ai} alt=""  />
                  <img className="item-icons" src={xd} alt=""  />
                  <img className="item-icons" src={figma} alt=""  />
                  <img className="item-icons" src={photoshop} alt="" />
                  </div>
              </div>
              <div className="tech-stack-right">
              <FontAwesomeIcon className="tech-stack-icon" icon={faLaptopCode}/>
              <h3>Front-End Developer</h3>
              <p className="tech-stack-description">The Websites are <b>T</b>ailored according to the customers needs, <b>F</b>un to Operate and <b>W</b>ell Structured.</p>
              <div className="line"></div>
              <h3 className="tech-stack-role">Front-End Tools</h3>
              <div className="tools">
                    <img className="item-icons" src={html} alt=""  />
                    <img className="item-icons" src={css} alt=""  />
                    <img className="item-icons" src={js} alt=""  />
                    <img className="item-icons" src={react} alt=""  />
                    <img className="item-icons" src={reactn} alt="" />
                    <img className="item-icons" src={flutter} alt="" />
                </div>
              </div>
            </div>
            <div className="tech-stack-middle">
            <FontAwesomeIcon className="tech-stack-icon" icon={faServer}/>
            <h3>Back-End Developer</h3>
            <p className="tech-stack-description">The websites are provided with <b>P</b>owerful and <b>S</b>implistic back-end solutions to ensure <b>E</b>ase of use without any <b>H</b>assle.</p>
            <div className="line"></div>
            <h3 className="tech-stack-role">Back-End Tools</h3>
            <div className="tools">
                <img className="item-icons" src={node} alt=""  />
                <img className="item-icons" src={express} alt=""  />
                <img className="item-icons" src={mysql} alt=""  />
                <img className="item-icons" src={mongo} alt=""  />
                <img className="item-icons" src={firebase} alt=""  />
            </div>
            </div>
          </div>
        </div>
    )
}

export default TechStack
