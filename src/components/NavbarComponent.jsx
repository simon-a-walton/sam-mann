import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { healthCoachingID, workWithMeID, aboutID, contactID } from "./../constants/AppConstants";

class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false
    };
  }

  getClassName() {
    if (this.state.isScrolled) {
      return "green";
    }
    return null;
  }

  handleScroll = () => {
    if (window.pageYOffset > 0) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  }

  render() {
    return (
      <header id="nav-bar" className={this.getClassName()}>
        <Navbar collapseOnSelect expand="lg">
          <Navbar>
            <Navbar.Brand href="#top">
              <img
                alt=""
                src="https://www.heruniqueglow.com/uploads/images/_560x560_crop_center-center_85/UK-Health-Coaches-Association-copy.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                id="logo-name"
              />
              &nbsp;
              Real Health Matters
            </Navbar.Brand>
          </Navbar>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav id="menu" className="float-left">
              <Nav.Link href={`#${healthCoachingID}`}>
                Health Coaching
              </Nav.Link>
              <Nav.Link href={`#${workWithMeID}`}>
                Work With Me
              </Nav.Link>
              <Nav.Link href={`#${aboutID}`}>
                About
              </Nav.Link>
              <Nav.Link href={`#${contactID}`}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
}

export default NavbarComponent;

