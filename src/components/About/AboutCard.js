import React from "react";
import Card from "react-bootstrap/Card";
import { FaTerminal } from "react-icons/fa";
import { IoCamera } from "react-icons/io5";
import { GiFilmProjector } from "react-icons/gi";
import { CgGym } from "react-icons/cg";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <FaTerminal color="#39ff14"/> Hello! I'm <span className="teal">Neel Sadafule </span>
            currently working towards my Bachelor's Degree in Computing Science at<span className="purple"> Simon Fraser University.</span>
            <br />
            <FaTerminal color="#39ff14"/> Actively seeking Co-op opportunities in Web/App Development, Data Analysis, and Software Development.
            <br />
            <FaTerminal color="#39ff14"/> I love coding, solving problems, and building things that make a difference. 
            <br />
            <FaTerminal color="#39ff14"/> I am a quick learner and always eager to learn new technologies.
            <br />
            <br />
            Besides coding, these are some things that I'm passionate about!    
          </p>
          <ul>
            <li className="about-activity">
              <IoCamera /> Photography
            </li>
            <li className="about-activity">
              <GiFilmProjector /> Cinematography
            </li>
            <li className="about-activity">
              <CgGym /> Calisthenics
            </li>
          </ul>

          <p className="teal">
            "Crafting the future, one line of code at a time."{" "}
          </p>
          <footer className="blockquote-footer">Neel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
