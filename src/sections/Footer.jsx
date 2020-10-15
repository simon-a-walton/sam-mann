import React from "react";
import Col from 'react-bootstrap/Col';


const Footer = () => (
<>
  <div className="pt-4">
    <div className="footer-info">
      <Col className="text-left footer-text ">
        <p>
          &copy;
          {new Date().getFullYear()}
          &nbsp;
          Real Health Matters
        </p>
      </Col>

      <Col className="text-center footer-col">
        <div className="footer-copyright">
          <p>
            Created by
            <a href="https://simon-a-walton.github.io/profile"> Simon Walton </a>
            using
            <span>
            <strong> React⚛</strong>
            </span>
          </p>
        </div>
      </Col>

      <Col className="text-right">
        <ul className="list-unstyled social-media" style={{fontSize:'calc(25px + 1.5vw)'}}>
          <li>
            <a href="https://facebook.com" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-facebook" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </Col>
    </div>
  </div>
</>
);

export default Footer;
