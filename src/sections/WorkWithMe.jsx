import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './../components/Header';
import Content from './../components/Content';
import CardLayout from './../components/CardLayout';
import { colors } from './../constants/StyleConstants';
import { css } from 'glamor';
import { hideImage } from './../sections/Coaching';
import { workWithMeData } from './../data/workWithMeData';

const coachImage = css({
  width: '50%'
});

let bounce = css.keyframes({
  '0%':  {left:0, top:0},
  '50%': {left:0, top:'8px'},
  '100%': {left:0, top:0}
});

const iconBounce = css({
  position: 'relative',
  animation: `${bounce} 0.6s`,
  animationIterationCount: 3,
});

class WorkWithMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false,
    };
  };

  getClassName() {
    if (this.state.isScrolled) {
      return `${iconBounce}`
  } else {
      return null;
    }
  };

  handleScroll = () => {
    const deckTop = document.getElementById('top-of-deck');
    const deckTopOffset = deckTop.offsetTop;

    if (window.pageYOffset >= deckTopOffset -100) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  };

  render() {
    return (
      <div id='top-of-deck' className={`${css({ color: colors.darkPurple})} p-3 pb-5`}>
        <Row>
          <Col>
            <div className='header-section'>
              <Header headerText='Work With Me' />
              <Content contentText="So you're ready to make important changes in your life and priotise your health and wellbeing? Great! Here is how the process works..." />
            </div>

          </Col>
          <Col className={`${hideImage} d-sm-none d-md-none d-lg-block d-xl-block`} align='right'>
            <img
              src='https://www.comphealthclinic.co.uk/wp-content/uploads/2017/02/bigstock-Woman-talking-to-therapist-on-139783985.jpg'
              alt='coach'
              className={`${coachImage} pr-4`}
              align='center'
            />
          </Col>
        </Row>
        <CardDeck className='py-5 mx-2'>
          {workWithMeData.map((data) => (
            <CardLayout icon={`fas ${data.icon} + ${this.getClassName()}`} header={data.header} text={data.text} />
          ))}
        </CardDeck>
      </div>
    );
  }

   componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
}

export default WorkWithMe;
