import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import Title from '../Title/Title';
import JavascriptLogo from '../../logos/javascript.svg';
import ReactLogo from '../../logos/react-logo.svg';
import NodejsLogo from '../../logos/nodejs.svg';
import PythonLogo from '../../logos/python.svg';

export const technologies = [
  {
    id: nanoid(),
    logo: <JavascriptLogo />,
  },
  {
    id: nanoid(),
    logo: <ReactLogo />,
  },
  {
    id: nanoid(),
    logo: <NodejsLogo />,
  },
  {
    id: nanoid(),
    logo: <PythonLogo />,
  },
];

const About = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <StaticImage src="../../images/profile.jpeg" alt="profile image" />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  With a degree in Computer Engineering, I have been working for the past 10 years
                  in charge of project execution and development of technological solutions.
                </p>
                <p className="about-wrapper__info-text">
                  My experience comprises mobile application development, video and image analysis
                  systems, usage of artificial intelligence algorithms, and big data. I have dealt
                  with tasks throughout my career such as building all software parts and having
                  front-end, back-end, and cloud technologies skills.
                </p>
                <p className="about-wrapper__info-text">
                  Working mainly with JavaScript(ES6), React, and React Native, I also like to
                  venture with Node.js and Python.
                </p>
                <span className="d-flex mt-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href="resume.pdf"
                  >
                    Resume
                  </a>
                </span>
                <div className="mt-3 about-wrapper__info-technologies">
                  {technologies?.map(({ id, logo }) => (
                    <span key={id} className="about-wrapper__info-technologies--logo">
                      {logo}
                    </span>
                  ))}
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
