import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Tienda Deportiva Online",
      description: "Web de venta de productos deportivos",
      imgUrl: projImg1,
    },
    {
      title: "Diagnóstico Médico con IA",
      description: "Web de diagnóstico mediante radiografías de tórax usando RNA",
      imgUrl: projImg2,
    },
    {
      title: "Dashboard de Navegadores",
      description: "Análisis de los navegadores más usados en datasets de tráfico",
      imgUrl: projImg3,
    },
    {
      title: "App Financiera Móvil",
      description: "Aplicación móvil para control de finanzas personales",
      imgUrl: projImg4,
    },
    {
      title: "Dashboard de Bodega",
      description: "Visualización de inventarios y análisis de productos",
      imgUrl: projImg5,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Mi Portafolio</span>
                  <h2>Proyectos</h2>
                  <p>
                    Estos son algunos de los proyectos más destacados que he desarrollado,
                    abarcando aplicaciones web, móviles y análisis de datos.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Desarrollo Web</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Desarrollo Móvil</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Análisis de Datos</Nav.Link>
                      </Nav.Item>
                    </Nav>

                   <Tab.Content
  id="slideInUp"
  className={isVisible ? "animate__animated animate__slideInUp" : ""}
>
  {/* ===== Pestaña 1: Web ===== */}
  <Tab.Pane eventKey="first">
    <Row>
      {projects
        .filter((_, index) => index === 0 || index === 1) // solo 1 y 2
        .map((project, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <ProjectCard {...project} />
          </Col>
        ))}
    </Row>
  </Tab.Pane>

  {/* ===== Pestaña 2: Móvil ===== */}
  <Tab.Pane eventKey="second">
    <Row>
      {projects
        .filter((_, index) => index === 3) // solo el 4 (índice 3)
        .map((project, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <ProjectCard {...project} />
          </Col>
        ))}
    </Row>
  </Tab.Pane>

  {/* ===== Pestaña 3: Datos (Análisis) ===== */}
  <Tab.Pane eventKey="third">
    <Row>
      {projects
        .filter((_, index) => index === 2 || index === 4) // 3 y 5
        .map((project, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <ProjectCard {...project} />
          </Col>
        ))}
    </Row>
  </Tab.Pane>
</Tab.Content>

                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
