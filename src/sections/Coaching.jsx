import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './../components/Header';
import Content from './../components/Content';
import { css } from 'glamor';
import { colors } from './../constants/StyleConstants';
import happyWoman from './../images/happy-woman.jpg';

const coachingImage = css({
  paddingTop: '40px',
  width: '80%'
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
              <li>
                <span className={`fa-li ${css({ color: colors.green}) }`}>
                  <i className='fas fa-carrot' />
                </span>
                <Content contentText="We all know what we 'should' be doing; drinking more water and less alcohol, taking more exercise and eating more vegetables and less sugar. However, the information can be confusing and hard to put into practice" />
              </li>
              <li>
                <span className={`fa-li ${css({ color: colors.green}) }`}>
                  <i className='fas fa-people-carry' />
                </span>
                <Content contentText='It helps to have a plan of action, unique to you and your circumstances. Health coaching acts as a guiding hand and provides you with a clear, detailed plan alongside dedicated support to help you get the results you want.' />
              </li>
              <li>
                <span className={`fa-li ${css({ color: colors.green}) }`}>
                  <i className='fas fa-heart' />
                </span>
                <Content contentText='Your health is worth investing your time in. To not do so is a false economy, even if much of your life is spent looking after others or working, you will not be able to give anybody else your best if you are not feeling your best.' />
              </li>
            </ul>

              <h3>Areas of Expertise</h3>
              <div id='expertise'>
              <ul className='cards-list fa-ul'>
                <li>
                  <span className={`fa-li ${css({ color: colors.green}) }`}>
                    <i className='fas fa-check-circle' />
                  </span>
                <Content contentText='Menstrual Disorders' />
                </li>
                <li>
                  <span className={`fa-li ${css({ color: colors.green}) }`}>
                    <i className='fas fa-check-circle' />
                  </span>
                  <Content contentText='Weight Management' />
                </li>
              </ul>
            </div>
          </div>
      </div>
    </Col>
    <Col className={`${hideImage} d-sm-none d-md-none d-lg-block d-xl-block`} sm='3' lg='4' align='right'>
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
