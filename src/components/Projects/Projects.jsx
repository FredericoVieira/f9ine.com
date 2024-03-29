import React, { useEffect, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { Tilt } from 'react-tilt';
import { nanoid } from 'nanoid';
import Title from '../Title/Title';

const projects = [
  {
    id: nanoid(),
    image: (
      <StaticImage src="../../images/projects/mobile-builder.png" alt="Mobile Builder project" />
    ),
    title: 'Mobile Builder',
    description:
      'Web platform that allows users to create in-app mobile flows through a no-code builder experience.',
    technologies: `Technologies: JavaScript (Jest, React, React Testing Library, Saga), HTML / CSS (Styled Components).`,
    url: 'https://www.appcues.com/mobile',
  },
  {
    id: nanoid(),
    image: <StaticImage src="../../images/projects/nordy.png" alt="Nordy project" />,
    title: 'Nordy',
    description:
      'Is a web dictionary with the words and their meanings that I learn on a daily basis. The project is intended for intermediate and advanced English learners who lack fluency and for those who want to improve their vocabulary.',
    technologies: `Technologies: JavaScript (React, React Testing Library, TypeScript, Vitest), HTML / CSS (Styled Components), Storybook, Vite.`,
    url: 'https://nordy.vercel.app/',
    repo: 'https://github.com/FredericoVieira/nordy',
  },
  {
    id: nanoid(),
    image: <StaticImage src="../../images/projects/hp.png" alt="Print at your service project" />,
    title: 'HP Print At Your Service',
    description:
      'Web platform that allows users to manage printer subscriptions. Enables device synchronization to track print history, paper usage summary, cartridge status, and ink toner levels.',
    technologies: `Technologies: JavaScript (Axios, Jest, React, Typescript), HTML / CSS (Styled Components), Single Spa (MFE's), Rollup.`,
    url: 'https://www.hp.com/us-en/solutions/business-solutions/print-at-your-service.html',
  },
  {
    id: nanoid(),
    image: <StaticImage src="../../images/projects/lilly.png" alt="Lilly Tempo project" />,
    title: 'Lilly Tempo Website',
    description:
      'Personalized Diabetes Management Platform for patients and healthcare professionals supported by Eli Lilly and Company.',
    technologies: 'Technologies: JavaScript (Vue, Nuxt, GSAP), HTML / CSS (SASS).',
    url: 'https://www.lillytempo.com/',
  },
  {
    id: nanoid(),
    image: (
      <StaticImage
        src="../../images/projects/cropwise-protector.png"
        alt="Cropwise Protector project"
      />
    ),
    title: 'Cropwise Protector',
    description:
      'Intelligent Agricultural monitoring platform, that assists crop management with georeferenced monitoring, team performance indicators, and pest control.',
    technologies:
      'Technologies: JavaScript (Axios, Jest, React, React Testing Library, Redux, RxJS, TypeScript), HTML / CSS (Ant Design, SASS), AWS (CloudWatch, DynamoDB, Lambda, S3), Redis.',
    url: 'https://www.cropwise.com/protector',
  },
  {
    id: nanoid(),
    image: <StaticImage src="../../images/projects/izzi.png" alt="Izzi project" />,
    title: 'IZZI Gaming',
    description:
      'Web platform that helps e-sports players improve their skills based on coaching, courses, and game replay analysis.',
    technologies:
      'Technologies: JavaScript (Axios, Jest, React, React Testing Library), HTML / CSS (Material UI, SASS), GCP (App Engine, Cloud Storage, Compute Engine), NodeJs (Express, Joi, PM2), MongoDB.',
    url: 'https://izzi.gg/',
  },
  {
    id: nanoid(),
    image: <StaticImage src="../../images/projects/bdmg.jpeg" alt="BDMG App project" />,
    title: 'BDMG App',
    description:
      'App of contract management, that allows clients sign contracts digitally with proof of life and documents validation.',
    technologies: 'Technologies: JavaScript (Axios, React Native), HTML / CSS (UI Kitten, SASS).',
    url: 'https://apps.apple.com/br/app/bdmg/id1507682398',
  },
  {
    id: nanoid(),
    image: <StaticImage src="../../images/projects/kim.png" alt="Kim+ project" />,
    title: 'KIM+',
    description:
      'It is an app of service management, that helps the user with daily tasks such as recharging bus cards, paying bills, phone data recharge as well as offering discounts in a variety of stores',
    technologies:
      'Technologies: JavaScript (Axios, React Native), HTML / CSS (React Native Paper, SASS).',
    url: 'https://kimmais.app/',
  },
  {
    id: nanoid(),
    image: <StaticImage src="../../images/projects/simplicidata.jpeg" alt="Simplicidata project" />,
    title: 'Simplicidata',
    description:
      'Artificial intelligence web platform for data preparation, which allows the users to perform a lot of customized data transformations.',
    technologies:
      'Technologies: JavaScript (Axios, React, Redux, Redux-Saga, Relay, GraphQL, Webpack), HTML / CSS (Materialize, SASS).',
  },
  {
    id: nanoid(),
    image: <StaticImage src="../../images/projects/dataviva.jpeg" alt="Dataviva project" />,
    title: 'Dataviva',
    description:
      'Collaborative web platform for visualization of Brazilian socioeconomic data, in which the user can have an overview of the socioeconomic data of the country divided by states even cities, and so on.',
    technologies:
      'Technologies: JavaScript (D3, JQuery), HTML / CSS (Bootstrap), MySQL, Python (Flask), AWS (EC2, RDS, Redshift).',
    url: 'http://dataviva.info/pt/',
    repo: 'https://github.com/DataViva',
  },
  {
    id: nanoid(),
    image: <StaticImage src="../../images/projects/gravol.jpeg" alt="Gravol project" />,
    title: 'Gravol',
    description:
      'Web platform to helps teams collect and organize performance data by storing match events and videos and creates reports with key video clips.',
    technologies:
      'Technologies: JavaScript (Axios, Jest, React, React Testing Library), HTML / CSS (Material UI, SASS).',
  },
];

const Projects = () => {
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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map(({ id, title, description, technologies, url, repo, image }) => (
            <Row key={id} className="project-wrapper__row-direction">
              <Col lg={6} sm={12} className="project-wrapper__col-content">
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <div className="project-wrapper__text">
                    <h3 className="project-wrapper__text-title">{title}</h3>
                    <div>
                      <p>{description}</p>
                      <p className="mb-4">{technologies}</p>
                    </div>
                    {url && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url}
                      >
                        See Live
                      </a>
                    )}
                    {repo && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn text-color-main"
                        href={repo}
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </Fade>
              </Col>
              <Col lg={6} sm={12}>
                <Fade
                  right={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <div className="project-wrapper__image">
                    <a
                      href={url}
                      target="_blank"
                      aria-label="Project Link"
                      rel="noopener noreferrer"
                    >
                      <Tilt
                        options={{
                          reverse: false,
                          max: 8,
                          perspective: 1000,
                          scale: 1,
                          speed: 300,
                          transition: true,
                          axis: null,
                          reset: true,
                          easing: 'cubic-bezier(.03,.98,.52,.99)',
                        }}
                      >
                        <div data-tilt className="thumbnail rounded">
                          {image}
                        </div>
                      </Tilt>
                    </a>
                  </div>
                </Fade>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
