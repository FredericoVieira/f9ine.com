import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

const Header = () => {
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
    <section id="hero" className="jumbotron">
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        <Card body className="hero-card">
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              Hi, I am
              <span className="text-color-main"> Frederico Vieira</span>
              <br />
              Software engineer
            </h1>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <Link to="about" smooth duration={1000}>
                  Know more
                </Link>
              </span>
            </p>
          </Fade>
        </Card>
      </Fade>
    </section>
  );
};

export default Header;
