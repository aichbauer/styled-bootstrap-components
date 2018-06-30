import React from 'react';

import { Container } from '../../../../packages/styled-container-component';
import { Button } from '../../../../packages/styled-button-component';
import { Navbar, NavbarLink } from '../../../../packages/styled-navbar-component';
import { Nav } from '../../../../packages/styled-nav-component';

export class NavbarDark extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      Width: window.innerWidth,
    };
    this.handleResize=this.handleResize.bind(this);
  }

  handleOpenCloseNav() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }

  handleResize(e) {
    this.setState({Width:window.innerWidth});
  }

  componentDidMount(){
    window.addEventListener('resize', this.handleResize);

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const { hidden } = this.state;
    return (
      <Container fluid>
        <Navbar expandSm dark>
          <Nav start>
            <NavbarLink dark brand href="#">BRAND</NavbarLink>
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
          <Nav start collapse expandSm hidden={(this.state.Width>576)? false:!hidden}>
            <NavbarLink dark active>Active</NavbarLink>
            <NavbarLink dark href="#">Link</NavbarLink>
            <NavbarLink dark href="#">Link</NavbarLink>
            <NavbarLink dark disabled href="#">Disabled</NavbarLink>
          </Nav>
        </Navbar>
      </Container>
    );
  }
}
