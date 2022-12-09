import React from "react";
import './SkillsBar.css';

function SkillsBar () {
   return (
      <div className="bg-primary">
         <div className="p-6">
          

          <div className="skill-box">
              <span className="title">HTML</span>
              <div className="skill-bar">
                  <span className="skill-per html">
                      <span className="tooltip">95%</span>
                  </span>
              </div>
          </div>
          <div className="skill-box mt-2">
              <span className="title">CSS</span>
              <div className="skill-bar">
                  <span className="skill-per css">
                      <span className="tooltip">90%</span>
                  </span>
              </div>
          </div>
          <div className="skill-box mt-2">
              <span className="title">JavaScript</span>
              <div className="skill-bar">
                  <span className="skill-per javascript">
                      <span className="tooltip">70%</span>
                  </span>
              </div>
          </div>
          <div className="skill-box mt-2">
              <span className="title">NodeJS</span>
              <div className="skill-bar">
                  <span className="skill-per nodejs">
                      <span className="tooltip">40%</span>
                  </span>
              </div>
          </div>
          <div className="skill-box mt-2">
              <span className="title">ReactJS</span>
              <div className="skill-bar">
                  <span className="skill-per reactjs">
                      <span className="tooltip">70%</span>
                  </span>
              </div>
          </div>
          <div className="skill-box mt-2">
              <span className="title">ExpressJS</span>
              <div className="skill-bar">
                  <span className="skill-per expressjs">
                      <span className="tooltip">75%</span>
                  </span>
              </div>
          </div>
      </div>
      </div>
   )
}

export default SkillsBar;