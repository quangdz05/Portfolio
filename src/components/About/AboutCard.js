import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Quang Duong</span>{" "}
            from <span className="purple">Viet Nam</span>.
            <br />
            I’m currently a  {" "}
            <span className="purple">student</span> at{" "}
            <span className="purple">Vietnam Japan University - Vietnam National University, Hanoi</span>.
            <br />I’m passionate about {" "}
            <span className="purple">Software development</span> building{" "}
            <span className="purple"> practical technology products that solve real-world problems.</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Kiên trì thực hiện sẽ mang lại những điều tốt đẹp!"{" "}
          </p>
          <footer className="blockquote-footer">Quang Duong</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
