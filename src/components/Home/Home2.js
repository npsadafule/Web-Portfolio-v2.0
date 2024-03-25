import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A LITTLE ABOUT <span className="orange">MYSELF</span> 
            </h1>
              <p className="home-about-body">
              Embarking on the coding journey has sparked a lasting fascination within me, unlocking a realm where <span className="orange"><b>logic</b></span> meets <span className="teal"><b>creativity</b></span> . 
                <br />
                <br />
                I've wrestled with languages like <span className="cpp"><b>C++</b></span>, <span className="py"><b>Python</b></span> and <span className="js"><b>JavaScript</b></span> and I'm still here to tell the tale.
                <br />
                <br />
                I'm driven by the thrill of solving problems. When I encounter something puzzling, I’m all in, sometimes lingering on a challenge longer than expected. It’s part passion, part stubbornness, but entirely about the joy of cracking the code.
              </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar"/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>SOCIALS</h1>
            <p>
              Feel free to <span className="orange">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/npsadafule"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto: neel.sadafule13@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <IoMdMail />
                </a>
              </li>  
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/npsadafule"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/npsadafule"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
