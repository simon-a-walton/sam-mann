import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './../components/Header';
import Content from './../components/Content';
import Map from './../components/Map';
import { colors } from './../constants/StyleConstants';
import { css } from 'glamor';
import ContactContent from './../components/ContactContent';
import ContactForm from './../components/ContactForm';
import { contactData } from './../data/contactData';

const Contact = () => (
<>
  <Row className={`${css({ color: colors.darkPurple})} p-3 pb-5`}>
    <Col lg='8'>
      <div className='header-section'>
        <Header headerText='Contact' />
        <Content contentText='Want to find out more? Get in touch to arrange a free consultation today.' />
      </div>
      <div className='header-section'>
        <ContactForm />
      </div>
      <ul className='fa-ul list-unstyled contact-list' {...css({fontSize:'calc(8px + 1vw)'})}>
        {contactData.map((data) => (
          <ContactContent
            link={data.link}
            containerClassName={data.className}
          >
            {data.content}
          </ContactContent>
        ))}
      </ul>
    </Col>
    <Col lg='4' align='center' className='py-5'>
      <Map />
    </Col>
  </Row>
</>
);

export default Contact;
