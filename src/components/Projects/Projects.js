import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CoDrop WebApp"
              description="Developed a WebApp that utilizes Rest-APIs to provide user to maintain his all coding platforms score at a place.Also user can check for upcoming competitive events.
              Leveraged technical skills in React, HTML, CSS, and JavaScript to create a
              responsive and user-friendly web interface."
              ghLink="https://github.com/sandeepgurjar1/codrop-website"
              demoLink="https://codrop-website.netlify.app/"
       
            />
          </Col>
        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="FoodFactory"
              description="Created an e-commerce website, Food Factory, which specializes in selling fruits and veggies.
              Utilized HTML, CSS, and JavaScript to create a user-friendly andresponsive web
              interface.
              Implemented carting feature to add users product in a list.
              "
              ghLink="https://sandeepgurjar1.github.io/E-commerce-website/"
              
            />
          </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Gym WebSite"
              description="Built a gym website for fitness freaks to register for different
              kind of gym memberships. With different offers. Used HTML5, CSS, JavaScript and
              JQuery for the development. Good and easy UI for user.
              "
              
              ghLink="https://sandeepgurjar1.github.io/gymwebsite/"
        
            />
          </Col>      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
