import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class NavbarSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: ""
    };
  }

  handleScroll = () => {
    if (window.pageYOffset > 0) {
      this.setState({ className: "green" });
    } else {
      this.setState({ className: "" });
    }
  }

  render() {
    const pages = ['Health Coaching', 'Work With Me', 'About', 'Contact'];

    const turnToTag = (title) => {
      return (title.toLowerCase().split(" ").join('-'));
    }

    const navLinks = pages.map((page, i) => {
      if (page.includes(" ")) {
        return (
          <Nav.Link key={i} href={'#' + turnToTag(page)}>
            {page}
          </Nav.Link>
        )
      } else {
      return (
        <Nav.Link key={i} href={'#' + page.toLowerCase()}>
          {page}
        </Nav.Link>
      )
      }
    });

    return (
      <header id="nav-bar" className={this.state.className}>
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
              {navLinks}
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


export default NavbarSection;
