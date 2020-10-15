import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './../components/Header';
import Content from './../components/Content';
import Map from './../components/Map';
import { colors } from "./../constants/StyleConstants";
import { css } from 'glamor';

const Contact = () => (
<>
  <Row className={`${css({ color: colors.darkPurple})} p-3 pb-5`}>
    <Col lg="8">
      <div className="header-section">
        <Header headerText="Contact" />
        <Content contentText="Want to find out more? Get in touch to arrange a free consultation today." />
      </div>
      <ul className="fa-ul list-unstyled contact-list" style={{fontSize:'calc(8px + 1.05vw)'}}>
        <li>
          <a href="mailto:samantha@realhealthmatters.co.uk?subject=Enquiry from Website">
            <span className="fa-li">
              <i className={`fas fa-envelope-open-text ${css({ color: colors.purple})}`} />
            </span>
            &nbsp;
            samantha@realhealthmatters.co.uk
          </a>
        </li>
        <li>
          <a href="tel:07884404100">
            <span className="fa-li">
              <i className={`fas fa-phone ${css({ color: colors.purple})}`} />
            </span>
            &nbsp;
            07884404100
          </a>
        </li>
        <li>
          <span className="fa-li">
            <i className={`fas fa-map-pin ${css({ color: colors.purple})}`} />
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

export default Contact;
