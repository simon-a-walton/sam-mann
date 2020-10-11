import React from 'react';
import Container from 'react-bootstrap/Container';
import HowItWorks from './sections/How-it-works';
import Footer from './sections/Footer';
import Banner from './sections/Banner';
import NavbarSection from './sections/Navbar-section.jsx';
import Contact from './sections/Contact';
import About from './sections/About';
import Coaching from './sections/Coaching';
import Badges from './sections/Badges';

import Fade from 'react-reveal/Fade';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App = () => (
  <>
    <NavbarSection />

    <section>
      <Banner className="container-layout" />
    </section>

    <Fade>
      <section id="health-coaching" >
        <Container fluid className="container-layout coaching-container" >
          <Coaching />
        </Container>
      </section>
    </Fade>

    <Fade>
      <section id="work-with-me">
        <Container fluid className="container-layout text-purple p-3 pb-5">
          <HowItWorks/>
        </Container>
      </section>
    </Fade>

    <Fade>
      <section id="about">
        <About />
      </section>
      <section className="bg-badges">
        <Badges />
      </section>
    </Fade>

    <Fade>
      <section id="contact">
        <Container fluid className="container-layout text-purple p-3 pb-5" >
          <Contact />
        </Container>
      </section>
    </Fade>

    <section id="footer" className="bg-dark-purple">
      <Footer />
    </section>
  </>
);

export default App;
