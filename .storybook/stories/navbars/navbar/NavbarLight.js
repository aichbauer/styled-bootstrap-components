import React from 'react';

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
        <Container fluid>
          <Navbar expandSm light>
            <Nav start>
              <NavbarLink light brand href="#">BRAND</NavbarLink>
              <Nav end>
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
            </Nav>
            <Nav start collapse expandSm hidden={hidden}>
              <NavbarLink light active>Active</NavbarLink>
              <NavbarLink light href="#">Link</NavbarLink>
              <NavbarLink light href="#">Link</NavbarLink>
              <NavbarLink light disabled href="#">Disabled</NavbarLink>
            </Nav>
          </Navbar>
        </Container>
    );
  }
}
