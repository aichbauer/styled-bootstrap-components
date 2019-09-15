import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonGroupReadme from '../../../packages/styled-button-component/README.md';
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
} from '../../../packages/styled-button-component';

storiesOf('ButtonGroup', module)
  .addParameters({
    readme: { sidebar: ButtonGroupReadme },
  })
  .add('simple', () => (
    <ButtonGroup>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  ))
  .add('sizes', () => (
    <>
      <div>
        <ButtonGroup lg mb2>
          <Button secondary>Left</Button>
          <Button secondary>Middle</Button>
          <Button secondary>Right</Button>
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup mb2>
          <Button secondary>Left</Button>
          <Button secondary>Middle</Button>
          <Button secondary>Right</Button>
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup sm dBlock mb2>
          <Button secondary>Left</Button>
          <Button secondary>Middle</Button>
          <Button secondary>Right</Button>
        </ButtonGroup>
      </div>
    </>
  ))
  .add('vertical', () => (
    <ButtonGroup vertical>
      <Button secondary>Button</Button>
      <Button secondary>Button</Button>
      <Button secondary>Button</Button>
      <Button secondary>Button</Button>
      <Button secondary>Button</Button>
      <Button secondary>Button</Button>
    </ButtonGroup>
  ))
  .add('toolbar', () => (
    <ButtonToolbar>
      <ButtonGroup mr2>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </ButtonGroup>
      <ButtonGroup mr2>
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>8</Button>
      </ButtonGroup>
    </ButtonToolbar>
  ));
