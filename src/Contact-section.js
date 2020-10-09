import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import Content from './Content';
import Map from './Map';

const ContactSection = () => (
<>
  <Row>
    <Col lg="8">
      <div className="header-section">
        <Header headerText="Contact" />
        <Content contentText="Want to find out more? Get in touch to arrange a free consultation today." />
      </div>
      <ul className="fa-ul list-unstyled contact-list" style={{fontSize:'calc(8px + 1.05vw)'}}>
        <li>
          <a href="mailto:samantha@realhealthmatters.co.uk?subject=Enquiry from Website">
            <span className="fa-li">
              <i className="fas fa-envelope-open-text make-purple" />
            </span>
            &nbsp;
            samantha@realhealthmatters.co.uk
          </a>
        </li>
        <li>
          <a href="tel:07884404100">
          <span className="fa-li">
            <i className="fas fa-phone make-purple" />
          </span>
          &nbsp;
          07884404100
        </a>
        </li>
        <li>
          <span className="fa-li">
            <i className="fas fa-map-pin make-purple" />
          </span>
            &nbsp;
            Liss, England, GU33 7HN
        </li>
      </ul>
    </Col>
    <Col lg="4" align="center" className="pb-5">
      <Map />
    </Col>
  </Row>

</>
);

export default ContactSection;
