import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Container } from '../../../../packages/styled-container-component';
import { Button } from '../../../../packages/styled-button-component';
import { Navbar, NavbarLink } from '../../../../packages/styled-navbar-component';
import { Nav } from '../../../../packages/styled-nav-component';

export class NavbarLight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
  }

  handleOpenCloseNav() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }

  render() {
    const { hidden } = this.state;
    return (
      <Router>
        <Container fluid>
          <Container fluid>
            <Navbar expandSm light>
              <Nav start>
                <NavbarLink light brand router to="#">BRAND</NavbarLink>
                <Button
                  light
                  outline
                  toggleCollapse
                  expandSm
                  onClick={() => this.handleOpenCloseNav()}
                >
                  <span>&#9776;</span>
                </Button>
              </Nav>
              <Nav start collapse expandSm hidden={hidden}>
                <NavbarLink light active router to="#">Active</NavbarLink>
                <NavbarLink light router to="#">Link</NavbarLink>
                <NavbarLink light router to="#">Link</NavbarLink>
                <NavbarLink light router disabled to="#">Disabled</NavbarLink>
              </Nav>
            </Navbar>
          </Container>
        </Container>
      </Router>
    );
  }
}
