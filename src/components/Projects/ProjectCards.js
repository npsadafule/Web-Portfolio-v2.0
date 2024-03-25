import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ color: "#39ff14"}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", paddingLeft:"3%", paddingRight: "3%" }}>
          {props.description}
        </Card.Text>

        {/* Render GitHub or Blog button if ghLink is provided */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {/* Render Demo button if demoLink is provided and is not a Blog */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: props.ghLink ? "10px" : "0" }} // Adjust marginLeft based on the presence of the GitHub/Blog button
          >
            <FaExternalLinkAlt /> &nbsp;
            {"View"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
