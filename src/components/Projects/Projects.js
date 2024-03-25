import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import vancouver from "../../Assets/Projects/VCH.png";
import weather from "../../Assets/Projects/weather.png";
import gamejam from "../../Assets/Projects/gamejam.png"
import valentine from "../../Assets/Projects/valentine.png"
import ushack from "../../Assets/Projects/Ushack.png"
import portfolio from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="orange">My Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vancouver}
              isBlog={false}
              title="Operations Research"
              description="This project, conducted at SFU's Big Data Lab, entailed rigorous data analysis, mathematical modelling and simulation using Python libraries to process EMR data provided by VCH, calculating critical metrics such as appointment frequency (lambda) and patient show rates. The insights gleaned were systematically stored and managed using MongoDB to facilitate dynamic data handling and to support robust healthcare delivery optimization."
              ghLink="https://github.com/npsadafule/Math402W"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio"
              description="Personal Portfolio Website built using React, Bootstrap, and CSS, designed to showcase my projects, skills, and experience. It features a responsive layout, smooth animations, and a clean, minimalist design that highlights my work and provides a seamless user experience."
              ghLink="https://github.com/npsadafule"
              demoLink="https://npsadafule.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Cross Platform Weather App"
              description="A cross-platform application built using React Native, designed to provide users with current and forecasted weather information. It leverages the Weather API to offer detailed weather updates including temperature, conditions, wind speed, and humidity, complete with a dynamic UI that adapts the background to match the weather conditions."
              ghLink="https://github.com/npsadafule/Weather-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={valentine}
              isBlog={false}
              title="Be My Valentine?"
              description="A playful, React-based web app that engages users in a delightful game of persuasion for Valentine's Day 2024. With a whimsical interface, it humorously dodges every 'No' with witty replies until you say 'Yes', culminating in a festive confetti celebration. Created by Neel Sadafule, it combines humor, charm, and a bit of digital magic to spread love and joy."
              ghLink="https://github.com/npsadafule/Valentines-2024"
              demoLink="https://valentines-2024-iota.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gamejam}
              isBlog={false}
              title="SFU's Mountain Mayhem"
              description="SFU's Mountain Mayhem is a dynamic game developed in C# using Unity for a 24-hour game jam, centered around the theme Peak. It features an engaging gameplay experience with custom-designed logos, menus, and scene transitions, showcasing a collaborative effort in game design and development."             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ushack}
              isBlog={false}
              title="UrbanShack UX Design Case Study"
              description="UrbanShack revolutionizes group food ordering by addressing common pain points with a user-friendly group ordering feature. Developed through extensive user research and iterative design, this solution allows easy bill splitting, individual order customization, and seamless payment tracking, significantly enhancing the food ordering experience for students and working professionals."
              demoLink="https://www.figma.com/file/N7yzAoAMLDNQmhdGZwz9Wa/UX-Design-Case-Study?type=design&node-id=0%3A1&mode=design&t=XhlTr1NB69nOaXAO-1"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
