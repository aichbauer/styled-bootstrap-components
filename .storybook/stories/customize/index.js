import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import ButtonReadme from '../../../packages/styled-button-component/README.md';

import CustomizationDocs from './docs/customization.md';

import { Simple } from './button/Simple';

import { Container } from '../../../packages/styled-container-component';
import { Button } from '../../../packages/styled-button-component';
import { Alert } from '../../../packages/styled-alert-component';


storiesOf('Customize', module)
  .add('Styled', withReadme(ButtonReadme, withDocs(CustomizationDocs, () => {
    const CustomizedButton = styled(Button)`
      border-radius: 0;
      width: 128px;
    `;

    return (
      <Container fluid>
        <CustomizedButton>Hello</CustomizedButton>
      </Container>
    );
  })))
  .add('Simple', withReadme(ButtonReadme, withDocs(CustomizationDocs, () => (
    <Container fluid>
      <Simple />
    </Container>
  ))))
  .add('Complex', withReadme(ButtonReadme, withDocs(CustomizationDocs, () => (
    <Container fluid dFlex>
      <Container pr2>
        <Button block primary mb2>Primary button</Button>
        <Alert block primary mb2>Primary alert</Alert>
        <Container bgPrimary p2>Primary container</Container>
      </Container>
      <Container pl2>
        <ThemeProvider theme={{
          colorScheme: {
            primaryLight: '#a1bfff',
            primaryLighter: '#6e9cff',
            primary: '#548bff',
            primaryDarker: '#3b7aff',
            primaryDark: '#2168ff',
            primaryDarkest: '#0757ff',
          },
        }}>
          <div>
            <Button block primary mb2>Themed primary button</Button>
            <Alert block primary mb2>Themed primary alert</Alert>
            <Container bgPrimary p2>Themed primary container</Container>
          </div>
        </ThemeProvider>
      </Container>
    </Container>
  ))));

