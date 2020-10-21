import React from 'react';
import WorkWithMe from './sections/WorkWithMe';
import Footer from './sections/Footer';
import Banner from './sections/Banner';
import NavbarComponent from './components/NavbarComponent.jsx';
import Contact from './sections/Contact';
import About from './sections/About';
import Coaching from './sections/Coaching';
import AppContent from './components/AppContent';
import { healthCoachingID, workWithMeID, aboutID, contactID } from './constants/AppConstants';
import { colors } from './constants/StyleConstants';
import { css } from 'glamor';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';

const App = () => (
  <>
    <NavbarComponent />
    <section>
      <Banner className='container-layout' />
    </section>
    <AppContent
      id={healthCoachingID}
      containerClassName='container-layout coaching-container'
    >
      <Coaching />
    </AppContent>
    <AppContent
      id={workWithMeID}
      containerClassName='container-layout'
    >
      <WorkWithMe />
    </AppContent>
    <section id={aboutID}>
      <About />
    </section>
    <AppContent
      id={contactID}
      containerClassName='container-layout'
    >
      <Contact />
    </AppContent>
    <section
      id='footer'
      className={`${css({ backgroundColor: colors.darkPurple, color: 'white' })}`}
    >
      <Footer />
    </section>
  </>
);

export default App;
