import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from '../../../packages/styled-container-component';
import { Transition } from '../../../packages/styled-base-components';
import TransitionReadme from '../../../packages/styled-base-components/README.md';
import { Button } from '../../../packages/styled-button-component';

const ToggleableContent = (props) => {
  const [hidden, setHidden] = useState(false);

  return (
    <Container>
      <Button block primary onClick={() => setHidden(!hidden)}>Toggle</Button>
      <Container p4>
        <Transition hidden={hidden} {...props}>
          Simple content in transition with props: <code>{JSON.stringify(props)}</code>
        </Transition>
      </Container>
    </Container>
  );
};

storiesOf('Transition', module)
  .addParameters({
    readme: { sidebar: TransitionReadme },
  })
  .add('simple', () => (
    <ToggleableContent />
  ))
  .add('no enter animation', () => (
    <ToggleableContent noEnter />
  ))
  .add('no exit animation', () => (
    <ToggleableContent noExit />
  ))
  .add('no initial enter animation', () => (
    <ToggleableContent noInitialEnter />
  ))
  .add('custom parameters', () => (
    <ToggleableContent
      delay={100}
      duration={1000}
      timingFunc="linear"
    />
  ))
  .add('hide on exit', () => (
    <div>
      <ToggleableContent hideOnExit />
      <hr />
    </div>
  ));
