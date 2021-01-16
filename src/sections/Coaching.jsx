import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './../components/Header';
import Content from './../components/Content';
import { css } from 'glamor';
import { colors } from './../constants/StyleConstants';
import happyWoman from './../images/happy-woman.jpg';
import { coachingData, expertiseData } from './../data/coachingData';

const coachingImage = css({
  paddingTop: '0px',
  maxWidth: '50%'
});

export const hideImage = css({
  '@media(min-width: 320px) and (max-width: 720px)': {
    display: 'none'
  }
});

const Coaching = () => (
<>
  <Row>
    <Col>
      <div className='header-section'>
        <Header headerText='Health Coaching' />
          <div id='coaching-list'>
            <ul className='fa-ul cards-list'>
              {coachingData.map((data) => (
                <li>
                  <span className={`fa-li ${css({ color: colors.green})}`}>
                    <i className={data.className} />
                  </span>
                  <Content contentText={data.content} />
                </li>
              ))}
            </ul>
            <h3>Areas of Expertise</h3>
            <div id='expertise'>
              <ul className='cards-list fa-ul'>
                {expertiseData.map((data) => (
                <li>
                  <span className={`fa-li ${css({ color: colors.green})}`}>
                    <i className={data.className} />
                  </span>
                  <Content contentText={data.content} />
                </li>
              ))}
              </ul>
            </div>
          </div>
      </div>
    </Col>
    <Col
      className={`${hideImage} d-sm-none d-md-none d-lg-block d-xl-block`}
      sm='3'
      lg='6'
      align='center'
      {...css({ margin: 'auto' })}
    >
      <img
        src={happyWoman}
        alt='Happy Woman'
        className={coachingImage}
      />
    </Col>
  </Row>
</>
);

export default Coaching;
