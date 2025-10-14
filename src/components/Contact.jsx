import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");

    try {
      await emailjs.sendForm('service_obgkwbp', 'template_rbsk8uq', e.target, 'FLDMtAKy_dNdoVjHw');
      setStatus({ success: true, message: 'Mensaje enviado correctamente ✅' });
      e.target.reset();
    } catch (error) {
      setStatus({ success: false, message: 'Hubo un error al enviar ❌' });
    } finally {
      setButtonText("Enviar");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          {/* Imagen lateral */}
          <Col md={6} className="text-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={`contact-img ${isVisible ? "animate__animated animate__zoomIn" : ""}`}
                  src={contactImg}
                  alt="Contact Us"
                />
              }
            </TrackVisibility>
          </Col>

          {/* Formulario */}
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`contact-form-container ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <h2>Contáctame</h2>
                  <p>Completa el formulario y te responderé lo antes posible 🚀</p>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col sm={6} className="px-1">
                        <input type="text" name="firstName" placeholder="Nombre" required />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input type="text" name="lastName" placeholder="Apellido" required />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input type="email" name="email" placeholder="Correo electrónico" required />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input type="tel" name="phone" placeholder="Teléfono" />
                      </Col>
                      <Col sm={12} className="px-1">
                        <textarea rows="6" name="message" placeholder="Escribe tu mensaje..." required></textarea>
                      </Col>
                      <Col sm={12} className="text-center">
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col sm={12}>
                          <p className={status.success ? "success" : "danger"}>{status.message}</p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
