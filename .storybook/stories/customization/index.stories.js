import React from 'react';
import { storiesOf } from '@storybook/react';
import styled, { ThemeProvider } from 'styled-components';
import { Container } from '../../../packages/styled-container-component';
import { Button } from '../../../packages/styled-button-component';
import { Alert } from '../../../packages/styled-alert-component';
import ConfigReadme from '../../../packages/styled-config/README.md';

storiesOf('Customization', module)
  .addParameters({
    readme: { sidebar: ConfigReadme },
  })
  .add('styled components', () => {
    const CustomizedButton = styled(Button)`
      border-radius: 0;
      width: 128px;
    `;

    return (
      <CustomizedButton>Hello</CustomizedButton>
    );
  })
  .add('theming', () => (
    <React.Fragment>
      <Button block primary>Default primary button</Button>

      <ThemeProvider theme={{
        button: { colors: { primary: { color: '#001919' } } },
      }}>
        <Button block primary>Themed primary button</Button>
      </ThemeProvider>
    </React.Fragment>
  ))
  .add('complex theming', () => (
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
          <React.Fragment>
            <Button block primary mb2>Themed primary button</Button>
            <Alert block primary mb2>Themed primary alert</Alert>
            <Container bgPrimary p2>Themed primary container</Container>
          </React.Fragment>
        </ThemeProvider>
      </Container>
    </Container>
  ));
