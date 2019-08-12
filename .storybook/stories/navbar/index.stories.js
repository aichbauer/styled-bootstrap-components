import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '../../utils';
import { Navbar, NavbarLink } from '../../../packages/styled-navbar-component';
import NavbarReadme from '../../../packages/styled-navbar-component/README.md';
import { Nav } from '../../../packages/styled-nav-component';
import { Button } from '../../../packages/styled-button-component';

storiesOf('Navbar', module)
  .addParameters({
    readme: { sidebar: NavbarReadme },
  })
  .add('light', Story(() => {
    const [hidden, setHidden] = useState(true);

    return (
      <Navbar expandSm light>
        <Nav start>
          <NavbarLink light brand href="#">BRAND</NavbarLink>
          <Nav end>
            <Button
              light
              outline
              toggleCollapse
              expandSm
              onClick={() => setHidden(!hidden)}
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
    );
  }))
  .add('dark', Story(() => {
    const [hidden, setHidden] = useState(true);

    return (
      <Navbar expandSm dark>
        <Nav start>
          <NavbarLink dark brand href="#">BRAND</NavbarLink>
          <Nav end>
            <Button
              dark
              outline
              toggleCollapse
              expandSm
              onClick={() => setHidden(!hidden)}
            >
              <span>&#9776;</span>
            </Button>
          </Nav>
        </Nav>
        <Nav start collapse expandSm hidden={hidden}>
          <NavbarLink dark active>Active</NavbarLink>
          <NavbarLink dark href="#">Link</NavbarLink>
          <NavbarLink dark href="#">Link</NavbarLink>
          <NavbarLink dark disabled href="#">Disabled</NavbarLink>
        </Nav>
      </Navbar>
    );
  }));
