import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './../components/Header';
import Content from './../components/Content';
import Map from './../components/Map';
import { colors } from "./../constants/StyleConstants";
import { css } from 'glamor';
import ContactContent from "./../components/ContactContent";

const Contact = () => (
<>
  <Row className={`${css({ color: colors.darkPurple})} p-3 pb-5`}>
    <Col lg="8">
      <div className="header-section">
        <Header headerText="Contact" />
        <Content contentText="Want to find out more? Get in touch to arrange a free consultation today." />
      </div>
      <ul className="fa-ul list-unstyled contact-list" style={{fontSize:'calc(8px + 1.05vw)'}}>
        <ContactContent
          link='mailto:samantha@realhealthmatters.co.uk?subject=Enquiry from Website'
          containerClassName='fas fa-envelope-open-text'
        >
          samantha@realhealthmatters.co.uk
        </ContactContent>
         <ContactContent
          link='tel:07884404100'
          containerClassName='fas fas fa-phone'
        >
          07884404100
        </ContactContent>
         <ContactContent
          link=''
          containerClassName='fas fa-map-pin'
        >
          Liss, England, GU33 7HN
        </ContactContent>
      </ul>
    </Col>
    <Col lg="4" align="center" className="pb-5">
      <Map />
    </Col>
  </Row>
</>
);

export default Contact;
