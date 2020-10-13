import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const Badges = () => {
  const containerStyle = {
    maxWidth: 900,
    margin: '0 auto',
    padding: 25
  }

  return (
    <Container style={containerStyle}>
      <Row className="text-center text-white py-3">
        <Col id="accreditation-text" sm="12" md="3" className="text-center pt-3">
          <p style={{fontSize: 25, fontWeight: 500}}className="pb-sm-3 pt-lg-5 pt-md-5 pt-sm-1 text-center"><strong>Accreditations</strong></p>
        </Col>
        <Col xs="6" sm="6" md="3">
          <a href="https://www.ukhealthcoaches.com/england/liss/health-coach/samantha-mann" rel="noopener noreferrer" target="_blank">
            <img
              className="ukhc-logo img-responsive"
              src="https://www.heruniqueglow.com/uploads/images/_560x560_crop_center-center_85/UK-Health-Coaches-Association-copy.png"
              alt="Health Coaches Association"
            />
          </a>
        </Col>
        <Col xs="6" sm="6" md="3">
          <a href="https://www.integrativenutrition.com/health-coaching" rel="noopener noreferrer" target="_blank">
            <img
              className="iin-logo img-responsive"
              src="https://images.youracclaim.com/images/3809dced-24e0-43ff-8350-5e697ee99012/HCTP_INHC_Badge.png"
              alt="Health Coaches Association"
            />
          </a>
        </Col>
      </Row>
    </Container>
  )
}

export default Badges;
