import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Container } from '../../../../packages/styled-container-component';
import { Button } from '../../../../packages/styled-button-component';
import { Navbar, NavbarLink } from '../../../../packages/styled-navbar-component';
import { Nav } from '../../../../packages/styled-nav-component';

export class NavbarDark extends React.Component {
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
          <Navbar expandSm dark>
            <Nav start>
              <NavbarLink dark brand router to="#">BRAND</NavbarLink>
              <Nav end>
                <Button
                  dark
                  outline
                  toggleCollapse
                  expandSm
                  onClick={() => this.handleOpenCloseNav()}
                >
                  <span>&#9776;</span>
                </Button>
              </Nav>
            </Nav>
            <Nav start collapse expandSm hidden={hidden}>
              <NavbarLink dark active router to="#">Active</NavbarLink>
              <NavbarLink dark router to="#">Link</NavbarLink>
              <NavbarLink dark router to="#">Link</NavbarLink>
              <NavbarLink dark router disabled to="#">Disabled</NavbarLink>
            </Nav>
          </Navbar>
        </Container>
      </Router>
    );
  }
}
