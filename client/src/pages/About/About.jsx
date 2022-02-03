import React from "react";
import "../../styles/About.css";
import claudia from "../../images/claudia.png";
import esranur from "../../images/esranur.png";
import obada from "../../images/obada.png";
import alex from "../../images/alex.png";
import amar from "../../images/amar.png";

const About = () => {
  return (
    <div className="page-container">
      <div className="page-content-container">
        <h2>Who we are?</h2>
        <p>We are the sweet students of class 33</p>

        <div>
          <h3 style={{ padding: "20px" }}>Ladies first 😁</h3>
          <div className="students-container">
            <div className="student">
              <a
                className="student"
                href="https://github.com/EsranurGalipKayahan"
                target="_blank"
                rel="noreferrer"
                aria-label="Esranur Github"
              >
                <img src={esranur} alt="esranur" />
                <p>Esranur: Developer</p>
              </a>
            </div>
            <div className="student">
              <a
                className="student"
                href="https://github.com/claudiadewindt"
                target="_blank"
                rel="noreferrer"
                aria-label="Claudia Github"
              >
                <img src={claudia} alt="claudia" />
                <p>Claudia: Developer</p>
              </a>
            </div>
            <div className="student">
              <a
                className="student"
                href="https://github.com/ObadaElSharbatly"
                target="_blank"
                rel="noreferrer"
                aria-label="Obada Github"
              >
                <img src={obada} alt="obada" />
                <p>Obada: Developer</p>
              </a>
            </div>
            <div className="student">
              <a
                className="student"
                href="https://github.com/AJUP86"
                target="_blank"
                rel="noreferrer"
                aria-label="Alejandro Github"
              >
                <img src={alex} alt="alejandro" />
                <p>Alejandro: Developer</p>
              </a>
            </div>
            <div className="student">
              <a
                className="student"
                href="https://github.com/Amar-Mahdy"
                target="_blank"
                rel="noreferrer"
                aria-label="Amar Github"
              >
                <img src={amar} alt="amar" />
                <p>Amar: QA</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
