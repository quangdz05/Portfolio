import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";



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
              
              title="AppLearnEnglishCuaQuang"
              description="English Vocabulary Learning App is an interactive application designed to help users improve their English vocabulary efficiently. The app provides features such as word learning, flashcards, quizzes, pronunciation practice, and progress tracking. It aims to make vocabulary learning more engaging, practical, and personalized for learners of different levels."
              ghLink="https://github.com/quangdz05/AppLearnEnglishCuaQuang"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              title="Schedule"
              description="Student Schedule Management System is a web-based application designed to help students organize and manage their study schedules effectively. The system allows users to create, edit, and track class schedules, assignments, exams, and study plans through an intuitive and user-friendly interface. It helps students improve time management, increase productivity, and maintain a balanced learning routine by providing structured scheduling and reminder features."
              ghLink="https://github.com/quangdz05/Fe_Schedule"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
