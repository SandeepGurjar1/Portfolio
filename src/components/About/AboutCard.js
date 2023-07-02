import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">&nbsp;Mukul Kumar&nbsp;</span>
            from <span className="purple"> Kota, Rajasthan.</span>
            <br /> I am a final year student pursuing Btech in Computer Science from Lovely professional Unversity&nbsp;(LPU).
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing football
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Leave it or Finish it but never waste time on things!"{" "}
          </p>
          <footer className="blockquote-footer">Mukul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
