import React from 'react';
import Header from './Header';
import Content from './Content';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const styles = {
  header: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1472190649224-495422e1b602?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)',
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },

  content: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(129, 92, 184, 0.75)',
    color: 'white'
  }
}

const About = () => (
<>
  <div style={styles.header}>
  <div style={styles.content}>
  <div className="container-layout p-3 pb-5">
  <Row className="about-row" >
    <div className="header-section col-sm-12 col-md-12 col-lg-9 order-1 order-sm-2 pr-4">
      <Header headerText="About Samantha Mann" />
      <Content contentText="I received my PhD in psychology in 2001, and then continued to work in psychological research. I did this while struggling with endometriosis, a sometimes debilitating menstrual disorder which I had been diagnosed with in my early twenties. I researched more and more until I decided this is what I want to do, to help others get better naturally, and so I trained to be a health coach so that I can do just that. I love that health coaching is holistic, addressing all elements in life to feel healthier, wherever you are starting from. From someone who feels OK but could use guidance to make healthier choices, to someone with a chronic condition who feels truly terrible, all can feel fantastic." />
    </div>

    <div className="col-sm-12 col-md-12 col-lg-3 order-lg-2 order-md-1 order-sm-1 order-xs-1" align="center">
      <a href="https://www.ukhealthcoaches.com/england/liss/health-coach/samantha-mann" rel="noopener noreferrer" target="_blank">
        <img
          className="sam-img pt-3 mr-3 rounded"
          src="https://www.ukhealthcoaches.com/pictures/profile/pimage-391-41-photo.jpg"
          alt="Sam"
        />
      </a>
    </div>
  </Row>
  <div className="text-center p-3" style={{fontSize:'calc(16px + 1.25vw)'}}>
      <span style={{fontWeight:'700'}}>"Real Health Matters</span> now. Back to basics, back to nature, back to balance".
    </div>
    </div>
    </div>
    </div>
</>
);

export default About;




