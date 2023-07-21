import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { nanoid } from 'nanoid';

export const networks = [
  {
    id: nanoid(),
    name: 'github',
    url: 'https://github.com/FredericoVieira',
  },
  {
    id: nanoid(),
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/frederico-vieira/',
  },
  {
    id: nanoid(),
    name: 'envelope-o',
    url: 'mailto:frederico.duarte.vieira@gmail.com',
  },
  {
    id: nanoid(),
    name: 'instagram',
    url: 'https://www.instagram.com/f9ine.dev/',
  },
  {
    id: nanoid(),
    name: 'twitter',
    url: 'https://twitter.com/f9inedev',
  },
];

const Footer = () => (
  <footer className="footer navbar-static-bottom">
    <Container>
      <span className="back-to-top">
        <Link to="hero" smooth duration={1000}>
          <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
        </Link>
      </span>
      <div className="social-links">
        {networks?.map(({ id, name, url }) => (
          <a key={id} href={url} rel="noopener noreferrer" target="_blank" aria-label={name}>
            <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
          </a>
        ))}
      </div>
      <hr />
      <p className="footer__text">© {new Date().getFullYear()} - Frederico Vieira</p>
    </Container>
  </footer>
);

export default Footer;
