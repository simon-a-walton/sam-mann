import React from 'react';


class SocialIcons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: window.matchMedia("(min-width: 500px)").matches
    };
  }

  render() {
    let styleHeader;

    if (this.state.matches) {
      console.log('hey');
      return (
        <ul className="list-unstyled social-media" style={styleHeader ={fontSize:'calc(25px + 1.5vw)'}}>
        {this.props.children}
        </ul>
        )
    } else {
      return (
        <ul className="list-unstyled social-media" style={styleHeader ={fontSize: '30px'}}>
        {this.props.children}
        </ul>
      )
    }
  }
}

export default SocialIcons;
