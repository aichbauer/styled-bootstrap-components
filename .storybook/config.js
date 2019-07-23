import React from 'react';
import { addParameters, addDecorator, configure } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'bottom',
  }
})

const GlobalStyle = createGlobalStyle`
  body {
    font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
    color: #111111;
  }
`;

const globalStyling = (story) => (
  <React.Fragment>
    <GlobalStyle />
    {story()}
  </React.Fragment>
);

// automatically import all files ending in *.stories.js
const req = require.context('./stories', true, /\.stories\.js$/);

function loadStories() {
  addDecorator(globalStyling);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
