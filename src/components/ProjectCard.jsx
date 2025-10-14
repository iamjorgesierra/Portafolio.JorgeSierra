import React from "react";
import { Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <TrackVisibility>
      {({ isVisible }) => (
        <Col xs={12} sm={6} md={4} className="mb-4">
          <div
            className={`proj-imgbx ${
              isVisible ? "animate__animated animate__zoomIn" : ""
            }`}
          >
            <img src={imgUrl} alt={title} className="img-fluid rounded-3" />
            <div className="proj-txtx">
              <h4 className="fw-bold">{title}</h4>
              <span>{description}</span>
            </div>
          </div>
        </Col>
      )}
    </TrackVisibility>
  );
};

export default ProjectCard;
