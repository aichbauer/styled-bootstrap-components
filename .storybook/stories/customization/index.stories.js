import React from 'react';
import { storiesOf } from '@storybook/react';
import styled, { ThemeProvider } from 'styled-components';
import { Container as JustContainer } from '../../../packages/styled-container-component';
import { Button as JustButton } from '../../../packages/styled-button-component';
import { Alert as JustAlert } from '../../../packages/styled-alert-component';
import ConfigReadme from '../../../packages/styled-config/README.md';

// Storybook and packages use different contexts (because they use different
// `styled-components`). This workaround allows storybook context to provide
// a theme to components.
const Container = styled(JustContainer)``;
const Button = styled(JustButton)``;
const Alert = styled(JustAlert)``;

storiesOf('Customization', module)
  .addParameters({
    readme: { sidebar: ConfigReadme },
  })
  .add('styled components', () => {
    const CustomizedButton = styled(Button)`
      border-radius: 0;
      color: #111111;
    `;

    return (
      <CustomizedButton block>Hello</CustomizedButton>
    );
  })
  .add('theming', () => (
    <>
      <Button block primary>Default primary button</Button>

      <ThemeProvider theme={{
        button: { colors: { primary: { color: '#001919' } } },
      }}>
        <Button block primary>Themed primary button</Button>
      </ThemeProvider>
    </>
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
            primaryLight: '#e4cafc',
            primaryLighter: '#c3a4e0',
            primary: '#9a75bd',
            primaryDarker: '#6f4399',
            primaryDark: '#47216b',
            primaryDarkest: '#1f0736',
          },
        }}>
          <>
            <Button block primary mb2>Themed primary button</Button>
            <Alert block primary mb2>Themed primary alert</Alert>
            <Container bgPrimary p2>Themed primary container</Container>
          </>
        </ThemeProvider>
      </Container>
    </Container>
  ));
