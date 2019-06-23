import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import { Container } from '../../../packages/styled-container-component';
import {
  Nav,
  NavLink,
} from '../../../packages/styled-nav-component';

import NavReadme from '../../../packages/styled-nav-component/README.md';

import NavSimpleDocs from './docs/simple.md';
import NavHorizontalCenterDocs from './docs/horizontal-center.md';
import NavHorizontalEndDocs from './docs/horizontal-end.md';
import NavVerticalDocs from './docs/vertical.md';
import NavTabsDocs from './docs/tabs.md';
import NavPillsDocs from './docs/pills.md';
import NavJustifiedDocs from './docs/justified.md';
import NavFillDocs from './docs/fill.md';
import NavPulledDocs from './docs/pulled.md';


storiesOf('Navs', module)
  .add('Simple', withReadme(NavReadme, withDocs(NavSimpleDocs, () => (
    <Container fluid>
      <Nav>
        <NavLink active href="#">Active</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink disabled href="#">Disabled</NavLink>
      </Nav>
    </Container>
  ))))
  .add('Pulled', withReadme(NavReadme, withDocs(NavPulledDocs, () => (
    <Container fluid>
      <Nav>
        <NavLink href="#">Link</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink mlAuto href="#">Pulled Link</NavLink>
        <NavLink href="#">Pulled link</NavLink>
      </Nav>
    </Container>
  ))))
  .add('Horizontal center', withReadme(NavReadme, withDocs(NavHorizontalCenterDocs, () => (
    <Container fluid>
      <Nav center>
        <NavLink active href="#">Active</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink disabled href="#">Disabled</NavLink>
      </Nav>
    </Container>
  ))))
  .add('Horizontal end', withReadme(NavReadme, withDocs(NavHorizontalEndDocs, () => (
    <Container fluid>
      <Nav end>
        <NavLink active href="#">Active</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink disabled href="#">Disabled</NavLink>
      </Nav>
    </Container>
  ))))
  .add('Vertical', withReadme(NavReadme, withDocs(NavVerticalDocs, () => (
    <Container fluid style={{ textAlign: 'left' }}>
      <Nav vertical>
        <NavLink active href="#">Active</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink disabled href="#">Disabled</NavLink>
      </Nav>
    </Container>
  ))))
  .add('Tabs', withReadme(NavReadme, withDocs(NavTabsDocs, () => (
    <Container fluid>
      <Nav tabs>
        <NavLink tabs active href="#">Active</NavLink>
        <NavLink tabs href="#">Link</NavLink>
        <NavLink tabs href="#">Link</NavLink>
        <NavLink tabs disabled href="#">Disabled</NavLink>
      </Nav>
    </Container>
  ))))
  .add('Pills', withReadme(NavReadme, withDocs(NavPillsDocs, () => (
    <Container fluid>
      <Nav>
        <NavLink pills active href="#">Active</NavLink>
        <NavLink pills href="#">Link</NavLink>
        <NavLink pills href="#">Link</NavLink>
        <NavLink pills disabled href="#">Disabled</NavLink>
      </Nav>
    </Container>
  ))))
  .add('Justified', withReadme(NavReadme, withDocs(NavJustifiedDocs, () => (
    <Container fluid>
      <Nav justified>
        <NavLink pills item active href="#">Active</NavLink>
        <NavLink pills item href="#">Link</NavLink>
        <NavLink pills item href="#">Link</NavLink>
        <NavLink pills item disabled href="#">Disabled</NavLink>
      </Nav>
    </Container>
  ))))
  .add('Fill', withReadme(NavReadme, withDocs(NavFillDocs, () => (
    <Container fluid>
      <Nav fill>
        <NavLink pills item active href="#">Active</NavLink>
        <NavLink pills item href="#">Link</NavLink>
        <NavLink pills item href="#">Link</NavLink>
        <NavLink pills item disabled href="#">Disabled</NavLink>
      </Nav>
    </Container>
  ))));

