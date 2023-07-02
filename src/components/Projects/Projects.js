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
              title="Weather-Application"
              description="Developed a weather application that utilizes Rest-APIs to provide users with 
              real-time temperature and probability of rain in their desired city.
              Leveraged technical skills in React, HTML, CSS, and JavaScript tocreate a
              responsive and user-friendly web interface."
              ghLink="https://github.com/cpt-mukul/WeatherApp"
       
            />
          </Col>
        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Takshila"
              description="Created an e-commerce website, Takshila, which specializes in selling secondhand books.
              Utilized HTML, CSS, and JavaScript to create a user-friendly andresponsive web
              interface.
              Implemented a search function to enhance the user experience andallow users to
              easily find desired books.
              "
              ghLink="https://github.com/cpt-mukul/takshila"
              demoLink="https://takshilaa.netlify.app"
            />
          </Col>

          
          

      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
