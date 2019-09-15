import React from 'react';
import { addParameters, addDecorator, configure } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import { addReadme } from 'storybook-readme';
import { Container } from '../packages/styled-container-component';

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'bottom',
    hierarchySeparator: '/',
  },
});

const GlobalStyle = createGlobalStyle`
  body {
    font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
    color: #111111;
  }
`;

const storyWrapper = (story) => (
  <>
    <GlobalStyle />
    <Container>
      {story()}
    </Container>
  </>
);

// automatically import all files ending in *.stories.js
const req = require.context('./stories', true, /\.stories\.js$/);

function loadStories() {
  addDecorator(storyWrapper);
  addDecorator(addReadme);

  require('./stories/index.stories');

  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
