import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../../../packages/styled-button-component';
import {
  FormControl,
  FormCheckInput,
  InputGroup,
  InputGroupAppend,
  InputGroupPrepend,
  InputGroupText,
} from '../../../packages/styled-form-component';
import InputGroupReadme from '../../../packages/styled-form-component/README.md';

storiesOf('InputGroup', module)
  .addParameters({
    readme: { sidebar: InputGroupReadme },
  })
  .add('prepend', () => (
    <InputGroup>
      <InputGroupPrepend>
        <InputGroupText>@</InputGroupText>
      </InputGroupPrepend>
      <FormControl type="text" placeholder="Username" />
    </InputGroup>
  ))
  .add('append', () => (
    <InputGroup>
      <FormControl type="text" placeholder="Recipient's username" />
      <InputGroupAppend>
        <InputGroupText>@example.com</InputGroupText>
      </InputGroupAppend>
    </InputGroup>
  ))
  .add('check', () => (
    <InputGroup>
      <InputGroupPrepend>
        <InputGroupText>
          <FormCheckInput type="checkbox" />
        </InputGroupText>
      </InputGroupPrepend>
      <FormControl type="text" placeholder="Selectable input" />
    </InputGroup>
  ))
  .add('prepend and append', () => (
    <InputGroup>
      <InputGroupPrepend>
        <InputGroupText>$</InputGroupText>
      </InputGroupPrepend>
      <FormControl type="text" />
      <InputGroupAppend>
        <InputGroupText>.00</InputGroupText>
      </InputGroupAppend>
    </InputGroup>
  ))
  .add('sizes', () => (
    <>
      <InputGroup sm mb2>
        <InputGroupPrepend>
          <InputGroupText>Small</InputGroupText>
        </InputGroupPrepend>
        <FormControl type="text" />
      </InputGroup>
      <InputGroup mb2>
        <InputGroupPrepend>
          <InputGroupText>Normal</InputGroupText>
        </InputGroupPrepend>
        <FormControl type="text" />
      </InputGroup>
      <InputGroup lg>
        <InputGroupPrepend>
          <InputGroupText>Large</InputGroupText>
        </InputGroupPrepend>
        <FormControl type="text" />
      </InputGroup>
    </>
  ))
  .add('multiple inputs', () => (
    <InputGroup>
      <InputGroupPrepend>
        <InputGroupText>First and last name</InputGroupText>
      </InputGroupPrepend>
      <FormControl type="text" />
      <FormControl type="text" />
    </InputGroup>
  ))
  .add('multiple addons', () => (
    <InputGroup>
      <InputGroupPrepend>
        <InputGroupText>$</InputGroupText>
        <InputGroupText>#</InputGroupText>
        <InputGroupText>%</InputGroupText>
      </InputGroupPrepend>
      <FormControl type="text" />
    </InputGroup>
  ))
  .add('buttons', () => (
    <InputGroup>
      <InputGroupPrepend>
        <Button outline>Button 1</Button>
        <Button outline>Button 2</Button>
      </InputGroupPrepend>
      <FormControl type="text" />
      <InputGroupAppend>
        <Button outline>Button 3</Button>
      </InputGroupAppend>
    </InputGroup>
  ));
