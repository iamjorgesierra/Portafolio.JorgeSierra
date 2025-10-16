import React from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Skills.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>SKILLS</h2>
              <p>
                Soy desarrollador Full Stack especializado en la creación de aplicaciones <strong>web</strong> y <strong>móviles</strong>, tanto en el
                <strong> frontend</strong> como en el <strong>backend</strong>. También cuento con experiencia en <strong>análisis de datos</strong> y
                <strong> visualización con Power BI</strong>.  
                <br /><br />
                Mis lenguajes y tecnologías principales incluyen <strong>React</strong>, <strong>Dart (Flutter)</strong>, <strong>TypeScript</strong>,
                <strong> Python</strong>, <strong>C#</strong>, <strong>Java</strong>, y un manejo intermedio de <strong>Angular</strong>.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                arrows={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Web Development" />
                  <h5>Desarrollo Web (Frontend & Backend)</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Mobile Development" />
                  <h5>Desarrollo Móvil (Flutter)</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Data Analysis" />
                  <h5>Análisis de Datos y Power BI</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Backend Development" />
                  <h5>APIs y Backend con Python, C#, Java</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Frontend Technologies" />
                  <h5>React, Angular y TypeScript</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
