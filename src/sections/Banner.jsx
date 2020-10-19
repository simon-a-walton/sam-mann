import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { colors } from './../constants/StyleConstants';
import { css } from 'glamor';

const styles = {
  header: {
    backgroundImage: 'url(https://www.inlifehealthcare.com/wp-content/uploads/2018/11/o-HAPPY-facebook.jpg)',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },

  content: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(121, 75, 246, 0.65)',
    color: 'white'
  }
}

const Banner = () => (
  <div style={styles.header} className="banner-bg">
    <Jumbotron style={styles.content}>
      <Bounce top delay={4500}>
        <a href="#contact" id="contact-button" className="ml-3">
          Get in Touch
        </a>
      </Bounce>
      <Row>
        <Col md={{ span: 8, offset: 2 }} className="pt-5">
          <ul className="banner-list list-unstyled text-center">
            <Fade>
              <li><h1><span style={{fontSize:'calc(16px + 4vw)'}} className={`${css({ color: colors.lightPurple })}`}>You</span> are amazing.</h1></li>
{/*            <li><h1><span style={{fontSize:'calc(16px + 4vw)'}} className="make-light-purple"><Fade delay={1000}>You</Fade></span><Fade delay={1500}> are </Fade><Fade delay={2000}> amazing.</Fade></h1></li>
*/}         </Fade>
            <Fade delay={1500}>
              <li><h1><span style={{fontSize:'calc(16px + 4vw)'}} className={`${css({ color: colors.green })}`}>Your body</span> is amazing.</h1></li>
            </Fade>
            <Fade delay={3000}>
              <li><h1>...So why don’t you feel amazing?</h1></li>
            </Fade>
          </ul>
        </Col>
        <Fade delay={4500}>
          <div className="container p-5 mb-3">
            <h4>
              You are in control of more than you think you are. <span className=""> Simple but consistent changes in lifestyle can reap great rewards...</span>
            </h4>
          </div>
        </Fade>
      </Row>
    </Jumbotron>
  </div>
);

export default Banner;
