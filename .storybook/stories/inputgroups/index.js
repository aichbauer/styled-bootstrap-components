import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import { Container } from '../../../packages/styled-container-component';
import { Button } from '../../../packages/styled-button-component';
import { Label } from '../../../packages/styled-base-components';
import {
  FormControl,
  FormCheck,
  FormCheckInput,
  InputGroup,
  InputGroupAppend,
  InputGroupPrepend,
  InputGroupText,
} from '../../../packages/styled-form-component';

import FormReadme from '../../../packages/styled-form-component/README.md';

import InputGroupSimpleDocs from './docs/simple.md';
import InputGroupSizingDocs from './docs/sizing.md';
import InputGroupCheckboxRadioDocs from './docs/checkbox-radio.md';
import InputGroupMultipleInputsDocs from './docs/multiple-inputs.md';
import InputGroupMultipleAddonsDocs from './docs/multiple-addons.md';
import InputGroupButtonAddonsDocs from './docs/button-addons.md';

storiesOf('Input groups', module)
  .add('Simple', withReadme(FormReadme, withDocs(InputGroupSimpleDocs, () => (
    <Container fluid style={{ textAlign: 'left' }}>
      <InputGroup mb="0.5rem">
        <InputGroupPrepend>
          <InputGroupText>@</InputGroupText>
        </InputGroupPrepend>
        <FormControl type="text" placeholder="Username" />
      </InputGroup>
      <InputGroup mb="0.5rem">
        <FormControl type="text" placeholder="Recipient's username" />
        <InputGroupAppend>
          <InputGroupText>@example.com</InputGroupText>
        </InputGroupAppend>
      </InputGroup>
      <Label>Your vanity URL</Label>
      <InputGroup mb="0.5rem">
        <InputGroupPrepend>
          <InputGroupText>https://example.com/users/</InputGroupText>
        </InputGroupPrepend>
        <FormControl type="text" />
      </InputGroup>
      <InputGroup mb="0.5rem">
        <InputGroupPrepend>
          <InputGroupText>$</InputGroupText>
        </InputGroupPrepend>
        <FormControl type="text" />
        <InputGroupAppend>
          <InputGroupText>.00</InputGroupText>
        </InputGroupAppend>
      </InputGroup>
      <InputGroup mb="0.5rem">
        <InputGroupPrepend>
          <InputGroupText>With textarea</InputGroupText>
        </InputGroupPrepend>
        <FormControl textarea />
      </InputGroup>
    </Container>
  ))))
  .add('Sizing', withReadme(FormReadme, withDocs(InputGroupSizingDocs, () => (
    <Container fluid style={{ textAlign: 'left' }}>
      <InputGroup sm mb="0.5rem">
        <InputGroupPrepend>
          <InputGroupText>Small</InputGroupText>
        </InputGroupPrepend>
        <FormControl type="text" />
      </InputGroup>
      <InputGroup mb="0.5rem">
        <InputGroupPrepend>
          <InputGroupText>Default</InputGroupText>
        </InputGroupPrepend>
        <FormControl type="text" />
      </InputGroup>
      <InputGroup lg mb="0.5rem">
        <InputGroupPrepend>
          <InputGroupText>Large</InputGroupText>
        </InputGroupPrepend>
        <FormControl type="text" />
      </InputGroup>
    </Container>
  ))))
  .add('Checkboxes and radios', withReadme(FormReadme, withDocs(InputGroupCheckboxRadioDocs, () => (
    <Container fluid style={{ textAlign: 'left' }}>
      <InputGroup mb="0.5rem">
        <InputGroupPrepend>
          <InputGroupText>
            <FormCheck>
              <FormCheckInput type="checkbox" />
            </FormCheck>
          </InputGroupText>
        </InputGroupPrepend>
        <FormControl type="text" />
      </InputGroup>
      <InputGroup mb="0.5rem">
        <InputGroupPrepend>
          <InputGroupText>
            <FormCheck>
              <FormCheckInput type="radio" />
            </FormCheck>
          </InputGroupText>
        </InputGroupPrepend>
        <FormControl type="text" />
      </InputGroup>
    </Container>
  ))))
  .add('Multiple Inputs', withReadme(FormReadme, withDocs(InputGroupMultipleInputsDocs, () => (
    <Container fluid style={{ textAlign: 'left' }}>
      <InputGroup mb="0.5rem">
        <InputGroupPrepend>
          <InputGroupText>First and last name</InputGroupText>
        </InputGroupPrepend>
        <FormControl type="text" />
        <FormControl type="text" />
      </InputGroup>
    </Container>
  ))))
  .add('Multiple Addons', withReadme(FormReadme, withDocs(InputGroupMultipleAddonsDocs, () => (
    <Container fluid style={{ textAlign: 'left' }}>
      <InputGroup mb="0.5rem">
        <InputGroupPrepend>
          <InputGroupText>$</InputGroupText>
          <InputGroupText>0.00</InputGroupText>
        </InputGroupPrepend>
        <FormControl type="text" />
      </InputGroup>
      <InputGroup mb="0.5rem">
        <FormControl type="text" />
        <InputGroupAppend>
          <InputGroupText>$</InputGroupText>
          <InputGroupText>0.00</InputGroupText>
        </InputGroupAppend>
      </InputGroup>
    </Container>
  ))))
  .add('Button Addons', withReadme(FormReadme, withDocs(InputGroupButtonAddonsDocs, () => (
    <Container fluid style={{ textAlign: 'left' }}>
      <InputGroup mb="0.5rem">
        <InputGroupPrepend>
          <Button outline secondary>Button</Button>
        </InputGroupPrepend>
        <FormControl type="text" />
      </InputGroup>
      <InputGroup mb="0.5rem">
        <FormControl type="text" placeholder="Recipient's username" />
        <InputGroupAppend>
          <Button outline secondary>Button</Button>
        </InputGroupAppend>
      </InputGroup>
      <InputGroup mb="0.5rem">
        <InputGroupPrepend>
          <Button outline secondary>Button</Button>
          <Button outline secondary>Button</Button>
        </InputGroupPrepend>
        <FormControl type="text" />
      </InputGroup>
      <InputGroup mb="0.5rem">
        <FormControl type="text" placeholder="Recipient's username" />
        <InputGroupAppend>
          <Button outline secondary>Button</Button>
          <Button outline secondary>Button</Button>
        </InputGroupAppend>
      </InputGroup>
    </Container>
  ))));
