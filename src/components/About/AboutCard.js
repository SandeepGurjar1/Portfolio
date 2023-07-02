import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">&nbsp;Sandeep&nbsp;</span>
            from <span className="purple"> Jhunjhunu, Rajasthan.</span>
            <br /> I am a final year student pursuing Btech in Computer Science from Lovely professional Unversity&nbsp;(LPU).
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Martial Arts
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Have a dream, Have a plan , Have a life!"{" "}
          </p>
          <footer className="blockquote-footer">Sandeep</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
