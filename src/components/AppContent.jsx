import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Fade from 'react-reveal/Fade';


class AppContent extends React.PureComponent {
  static propsTypes = {
    id: PropTypes.string,
    children: PropTypes.node.isRequired,
    containerClassName: PropTypes.string
  };

  render() {
    return (
      <Fade>
        <section id={this.props.id} >
          <Container
            fluid
            className={this.props.containerClassName} >
            {this.props.children}
          </Container>
      </section>
    </Fade>
    );
  }
}

export default AppContent;
