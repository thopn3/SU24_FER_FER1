import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

import { Container } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container>
      <Header/>
      <Main/>
      <Footer/>
    </Container>
  </React.StrictMode>
);