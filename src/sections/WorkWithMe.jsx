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

let coachImage = css({
  width: '50%'
})

class WorkWithMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false
    };
  }

  getClassName() {
    if (this.state.isScrolled) {
      return "icon-bounce"
  } else {
      return null;
    }
  }

  handleScroll = () => {
    const deckTop = document.getElementById("top-of-deck");
    const deckTopOffset = deckTop.offsetTop;

    if (window.pageYOffset >= deckTopOffset) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  }

  render() {

    const cardHeader = {
      first: "Free Consultation",
      second: "Bespoke Programme",
      third: "Weekly Sessions"
    }

    const cardText = {
      first: "We start the process by having an initial chat, either face-to-face or online, which will take roughly an hour. It is a confidential space to understand how you are getting stuck, where you want to get to and whether coaching is right for you at this time.",
      second: "You will be offered a bespoke programme designed around you over a period of three to six months depending on your individual needs.",
      third: "We will agree to meet weekly or biweekly at a regular time, either face to face, out in nature or online. "
    }

    return (
      <div id="top-of-deck" className={`${css({ color: colors.darkPurple})} p-3 pb-5`}>
        <Row>
          <Col>
            <div className="header-section">
              <Header headerText="Work With Me" />
              <Content contentText="So you're ready to make important changes in your life and priotise your health and wellbeing? Great! Here is how the process works..." />
            </div>

          </Col>
          <Col className={`${hideImage} d-sm-none d-md-none d-lg-block d-xl-block`} align="right">
            <img
              src="https://www.comphealthclinic.co.uk/wp-content/uploads/2017/02/bigstock-Woman-talking-to-therapist-on-139783985.jpg"
              alt="coach"
              className={`${coachImage} pr-4`}
              align="center"
            />
          </Col>
        </Row>
        <CardDeck className="py-5 mx-2">
          <CardLayout icon={`fas fa-phone + ${this.getClassName()}`} header={cardHeader.first} text={cardText.first} />
          <CardLayout icon={`fas fa-calendar + ${this.getClassName()}`} header={cardHeader.second} text={cardText.second} />
          <CardLayout icon={`fas fa-people-arrows + ${this.getClassName()}`} header={cardHeader.third} text={cardText.third} />
        </CardDeck>
      </div>
    );
  }

   componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
}

export default WorkWithMe;
