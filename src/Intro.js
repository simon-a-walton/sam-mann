import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Fade from 'react-reveal/Fade';

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        render: false
    }
  }

  componentDidMount() {
    setTimeout(function() {
      this.setState({render: true})
    }.bind(this), 1000)
  }


  render() {
    let renderList = false
    if(this.state.render) {
        renderList = <ul className="list-unstyled text-center intro-text" style={{fontSize:'calc(25px + 4vw)', fontWeight:'700'}}>
          <Fade>
          <li><span className="make-purple">You</span> are amazing.</li>
          </Fade>
            <Fade delay={1500}>
          <li><span className="make-purple">Your body</span> is amazing.</li>
           </Fade>
            <Fade delay={3000}>
          <li>...So why don’t you feel amazing?</li>
           </Fade>
        </ul>
      }
    return (
      <>
      {renderList}
      <Fade delay={4500}>
      <div className="container p-5">
        <h4>
          You are in control of so much more than you think you are! You are not destined to feel unwell or suffer ailments because of your genes or 'bad luck'. So many of the most prevalent chronic diseases are avoidable. <span className="make-purple"> Changes in lifestyle can reap great rewards.</span>
        </h4>
      </div>
      </Fade>
      </>
      )
  }



}

export default Intro;
