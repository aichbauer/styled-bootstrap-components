import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import BaseReadme from '../../../packages/styled-base-components/README.md';

import { Transition } from '../../../packages/styled-base-components';
import { Container } from '../../../packages/styled-container-component';
import { Button } from '../../../packages/styled-button-component';

class ToggleableContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  render() {
    const { visible } = this.state;
    return (
      <Container>
        <Button block primary onClick={() => this.setState({visible: !visible})}>Toggle</Button>
        <Container p4>
          <Transition visible={visible} {...this.props}>
            Simple content in transition with props: <code>{JSON.stringify(this.props)}</code>
          </Transition>
        </Container>
      </Container>
    )
  }
}

const toggleableContentSource = `
class ToggleableContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  render() {
    const { visible } = this.state;
    return (
      <Container>
        <Button block primary onClick={() => this.setState({visible: !visible})}>Toggle</Button>
        <Container p4>
          <Transition visible={visible} {...this.props}>
            Simple content in transition with props: <code>{JSON.stringify(this.props)}</code>
          </Transition>
        </Container>
      </Container>
    )
  }
}`;

const describeStory = (storySource) => (
  '```js\n' +
  toggleableContentSource + '\n\n' +
  '// ...\n\n' +
  storySource + '\n' +
  '```'
)

storiesOf('Transitions', module)
  .add('Simple', withReadme(BaseReadme, withDocs(describeStory(`<ToggleableContent />`), () => (
    <ToggleableContent />
  ))))
  .add('No enter animation', withReadme(BaseReadme, withDocs(describeStory(`<ToggleableContent noEnter />`), () => (
    <ToggleableContent noEnter />
  ))))
  .add('No exit animation', withReadme(BaseReadme, withDocs(describeStory(`<ToggleableContent noExit />`), () => (
    <ToggleableContent noExit />
  ))))
  .add('No initial enter animation', withReadme(BaseReadme, withDocs(describeStory(`<ToggleableContent noInitialEnter />`), () => (
    <ToggleableContent noInitialEnter />
  ))))
  .add('Custom parameters', withReadme(BaseReadme, withDocs(describeStory(`<ToggleableContent delay={100} duration={1000} timingFunc={"linear"} />`), () => (
    <ToggleableContent delay={100} duration={1000} timingFunc={"linear"} />
  ))));
