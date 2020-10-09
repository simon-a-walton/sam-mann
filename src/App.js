import React from 'react';
import Container from 'react-bootstrap/Container';
import Cards from './Cards';
import FooterPage from './Footer-page';
import Banner from './Banner';
import NavbarSection from './Navbar-section';
import ContactSection from './Contact-section';
import About from './About';
import Coaching from './Coaching';
import Badges from './Badges';

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
      <section id="why-coaching?" >
        <Container fluid className="container-layout coaching-container" >
          <Coaching />
        </Container>
      </section>
     </Fade>

    <Fade>
      <section id="work-with-me">
        <Container fluid className="container-layout text-purple p-3 pb-5">
          <Cards />
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
          <ContactSection />
        </Container>
      </section>
    </Fade>

    <section id="footer" className="bg-dark-purple">
      <FooterPage />
    </section>
  </>
);

export default App;
