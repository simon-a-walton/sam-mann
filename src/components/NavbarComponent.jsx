import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { healthCoachingID, workWithMeID, aboutID, contactID } from './../constants/AppConstants';
import { css } from 'glamor';
import Logo from '../images/Logo-03.png';

class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false,
    };
  }

  getClassName() {
    if (this.state.isScrolled) {
      return 'green';
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
      <header id='nav-bar' className={this.getClassName()}>
        <Navbar collapseOnSelect expand='lg'>
          <Navbar {...css({ [`& :hover`]: { transform: 'scale(1.02)' } })}>
            <Navbar.Brand {...css({ paddingLeft: '8px' })} href='#top'>
              <img src={Logo} alt='Real Health Matters Logo' height={30} width={'auto'} {...css({ 'padding-bottom': '5px' })} />
            </Navbar.Brand>
          </Navbar>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav id='menu' className='float-left'>
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
    window.addEventListener('scroll', this.handleScroll);
  }
}

export default NavbarComponent;

