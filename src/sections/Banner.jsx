import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import happyPeople from './../images/happy-people.jpg';
import { colors } from './../constants/StyleConstants';
import { css } from 'glamor';

const styles = {
  header: {
    backgroundImage: `url(${happyPeople}`,
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },

  content: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(121, 75, 246, 0.55)',
    color: 'white'
  }
}

const Banner = () => (
  <div style={styles.header} className='banner-bg'>
    <Jumbotron style={styles.content}>
      <Bounce top delay={4500}>
        <a href='#contact' id='contact-button' className='ml-3'>
          Get in Touch
        </a>
      </Bounce>
      <Row>
        <Col md={{ span: 8, offset: 2 }} className='pt-5'>
          <ul className='banner-list list-unstyled text-center'>
            <Fade>
              <li>
                <h1>
                  <span {...css({ color: colors.green , fontSize: 'calc(16px + 4vw)'})}>You</span> are amazing.
                </h1>
              </li>
            </Fade>
            <Fade delay={1500}>
              <li>
                <h1>
                  <span {...css({ color: colors.green, fontSize:'calc(16px + 4vw)' })}>Your body</span> is amazing.
                  </h1>
                </li>
            </Fade>
            <Fade delay={3000}>
              <li>
                <h1>
                  ...So why don’t you feel amazing?
                </h1>
              </li>
            </Fade>
          </ul>
        </Col>
        <Fade delay={4500}>
          <div className='container p-5 mb-3'>
            <h4>
              You are in control of more than you think you are. Simple but consistent changes in lifestyle can reap great rewards...
            </h4>
          </div>
        </Fade>
      </Row>
    </Jumbotron>
  </div>
);

export default Banner;
