import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';
import { BrowserRouter as Router } from 'react-router-dom';

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


storiesOf('Navs', module)
  .add('Simple', withReadme(NavReadme, withDocs(NavSimpleDocs, () => (
    <Router>
      <Container fluid>
        <Nav>
          <NavLink active router to="#">Active</NavLink>
          <NavLink router to="#">Link</NavLink>
          <NavLink router to="#">Link</NavLink>
          <NavLink router disabled to="#">Disabled</NavLink>
        </Nav>
      </Container>
    </Router>
  ))))
  .add('Horizontal center', withReadme(NavReadme, withDocs(NavHorizontalCenterDocs, () => (
    <Router>
      <Container fluid>
        <Nav center>
          <NavLink active router to="#">Active</NavLink>
          <NavLink router to="#">Link</NavLink>
          <NavLink router to="#">Link</NavLink>
          <NavLink router disabled to="#">Disabled</NavLink>
        </Nav>
      </Container>
    </Router>
  ))))
  .add('Horizontal end', withReadme(NavReadme, withDocs(NavHorizontalEndDocs, () => (
    <Router>
      <Container fluid>
        <Nav end>
          <NavLink active router to="#">Active</NavLink>
          <NavLink router to="#">Link</NavLink>
          <NavLink router to="#">Link</NavLink>
          <NavLink router disabled to="#">Disabled</NavLink>
        </Nav>
      </Container>
    </Router>
  ))))
  .add('Vertical', withReadme(NavReadme, withDocs(NavVerticalDocs, () => (
    <Router>
      <Container fluid style={{ textAlign: 'left' }}>
        <Nav vertical>
          <NavLink active router to="#">Active</NavLink>
          <NavLink router to="#">Link</NavLink>
          <NavLink router to="#">Link</NavLink>
          <NavLink router disabled to="#">Disabled</NavLink>
        </Nav>
      </Container>
    </Router>
  ))))
  .add('Tabs', withReadme(NavReadme, withDocs(NavTabsDocs, () => (
    <Router>
      <Container fluid>
        <Nav tabs>
          <NavLink tabs active router to="#">Active</NavLink>
          <NavLink tabs router to="#">Link</NavLink>
          <NavLink tabs router to="#">Link</NavLink>
          <NavLink tabs router disabled to="#">Disabled</NavLink>
        </Nav>
      </Container>
    </Router>
  ))))
  .add('Pills', withReadme(NavReadme, withDocs(NavPillsDocs, () => (
    <Router>
      <Container fluid>
        <Nav>
          <NavLink pills active router to="#">Active</NavLink>
          <NavLink pills router to="#">Link</NavLink>
          <NavLink pills router to="#">Link</NavLink>
          <NavLink pills router disabled to="#">Disabled</NavLink>
        </Nav>
      </Container>
    </Router>
  ))))
  .add('Justified', withReadme(NavReadme, withDocs(NavJustifiedDocs, () => (
    <Router>
      <Container fluid>
        <Nav justified>
          <NavLink pills item active router to="#">Active</NavLink>
          <NavLink pills item router to="#">Link</NavLink>
          <NavLink pills item router to="#">Link</NavLink>
          <NavLink pills item router disabled to="#">Disabled</NavLink>
        </Nav>
      </Container>
    </Router>
  ))))
  .add('Fill', withReadme(NavReadme, withDocs(NavFillDocs, () => (
    <Router>
      <Container fluid>
        <Nav fill>
          <NavLink pills item active router to="#">Active</NavLink>
          <NavLink pills item router to="#">Link</NavLink>
          <NavLink pills item router to="#">Link</NavLink>
          <NavLink pills item router disabled to="#">Disabled</NavLink>
        </Nav>
      </Container>
    </Router>
  ))));

