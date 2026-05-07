import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m currently a student at Vietnam Japan University - Vietnam National University, Hanoi, majoring in Information Technology and Artificial Intelligence. I’m passionate about software development, AI, and building practical technology solutions that address real-world challenges.

              I have experience working with JavaScript, C++, Csharp, Dart , React.js, and I enjoy developing both backend and frontend systems.

              I’m also interested in exploring new technologies and continuously learning to enhance my skills and knowledge in the field of software development and AI.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
