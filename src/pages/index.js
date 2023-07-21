import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const Index = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>F9ine | Software Engineer</title>
      <html lang="en" />
      <meta name="description" content="F9ine - Frederico Vieira Portfolio" />
    </Helmet>
    <App />
  </>
);

export default Index;
