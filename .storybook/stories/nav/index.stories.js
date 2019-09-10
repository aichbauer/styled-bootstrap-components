import React from 'react';
import { storiesOf } from '@storybook/react';
import { Nav, NavLink } from '../../../packages/styled-nav-component';
import NavReadme from '../../../packages/styled-nav-component/README.md';

storiesOf('Nav', module)
  .addParameters({
    readme: { sidebar: NavReadme },
  })
  .add('simple', () => (
    <Nav>
      <NavLink href="#" active>Active</NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink href="#" disabled>Disabled</NavLink>
    </Nav>
  ))
  .add('pulled', () => (
    <Nav>
      <NavLink href="#">Link</NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink href="#" mlAuto>Pulled Link</NavLink>
      <NavLink href="#">Pulled link</NavLink>
    </Nav>
  ))
  .add('centered', () => (
    <Nav center>
      <NavLink href="#" active>Active</NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink href="#" disabled>Disabled</NavLink>
    </Nav>
  ))
  .add('aligned', () => (
    <Nav end>
      <NavLink href="#" active>Active</NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink href="#" disabled>Disabled</NavLink>
    </Nav>
  ))
  .add('tabs', () => (
    <Nav tabs>
      <NavLink tabs href="#" active>Active</NavLink>
      <NavLink tabs href="#">Link</NavLink>
      <NavLink tabs href="#">Link</NavLink>
      <NavLink tabs href="#" disabled>Disabled</NavLink>
    </Nav>
  ))
  .add('pills', () => (
    <Nav tabs>
      <NavLink pills href="#" active>Active</NavLink>
      <NavLink pills href="#">Link</NavLink>
      <NavLink pills href="#">Link</NavLink>
      <NavLink pills href="#" disabled>Disabled</NavLink>
    </Nav>
  ))
  .add('justified', () => (
    <Nav justified>
      <NavLink pills item href="#" active>Active</NavLink>
      <NavLink pills item href="#">Link</NavLink>
      <NavLink pills item href="#">Link</NavLink>
      <NavLink pills item href="#" disabled>Disabled</NavLink>
    </Nav>
  ))
  .add('fill', () => (
    <Nav fill>
      <NavLink pills item href="#" active>Active</NavLink>
      <NavLink pills item href="#">Link</NavLink>
      <NavLink pills item href="#">Link</NavLink>
      <NavLink pills item href="#" disabled>Disabled</NavLink>
    </Nav>
  ));
