import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../../../packages/styled-button-component';
import { Jumbotron } from '../../../packages/styled-jumbotron-component';
import JumbotronReadme from '../../../packages/styled-jumbotron-component/README.md';

storiesOf('Jumbotron', module)
  .addParameters({
    readme: { sidebar: JumbotronReadme },
  })
  .add('simple', () => (
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit,
        a simple jumbotron-style component
        for calling extra attention to
        featured content or information.
      </p>
      <hr />
      <p>
        It uses utility classes for
        typography and spacing to
        space content out within
        the larger container.
      </p>
      <Button primary lg>Learn more</Button>
    </Jumbotron>
  ))
  .add('fluid', () => (
    <Jumbotron fluid>
      <h1>Fluid jumbotron</h1>
      <p>
        This is a modified jumbotron
        that occupies the entire horizontal
        space of its parent.
      </p>
    </Jumbotron>
  ));
