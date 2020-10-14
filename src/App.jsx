import React from 'react';
import WorkWithMe from './sections/WorkWithMe';
import Footer from './sections/Footer';
import Banner from './sections/Banner';
import NavbarComponent from './components/NavbarComponent.jsx';
import Contact from './sections/Contact';
import About from './sections/About';
import Coaching from './sections/Coaching';
import AppContent from './components/AppContent';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';

const App = () => (
  <>
    <NavbarComponent />
    <section>
      <Banner className="container-layout" />
    </section>
    <AppContent
      id="health-coaching"
      containerClassName='container-layout coaching-container'
    >
      <Coaching />
    </AppContent>
    <AppContent
      id="work-with-me"
      containerClassName='container-layout'
    >
      <WorkWithMe />
    </AppContent>
    <section id="about">
      <About />
    </section>
    <AppContent
      id="contact"
      containerClassName='container-layout'
    >
      <Contact />
    </AppContent>
    <AppContent
      id="footer"
      containerClassName='bg-dark-purple'
    >
      <Footer />
    </AppContent>
  </>
);

export default App;
