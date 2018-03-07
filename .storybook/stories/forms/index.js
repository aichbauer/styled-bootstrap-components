import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import { Container } from '../../../packages/styled-container-component';
import { Column } from '../../../packages/styled-grid-system-component';
import { Button } from '../../../packages/styled-button-component';
import { Label } from '../../../packages/styled-base-components';
import {
  FormCheck,
  FormCheckInput,
  FormControl,
  FormControlFile,
  FormControlPlainText,
  FormGroup,
  FormInline,
  FormText,
} from '../../../packages/styled-form-component';

import FormReadme from '../../../packages/styled-form-component/README.md';

import FormSimpleDocs from './docs/simple.md';
import FormControlsDocs from './docs/form-controls.md';
import FormSizingDocs from './docs/sizing.md';
import FormReadonlyDocs from './docs/readonly.md';
import FormReadonlyPlainTextDocs from './docs/readonly-plain-text.md';
import FormInlineDocs from './docs/inline.md';
import FormCheckboxRadioDefaultDocs from './docs/checkbox-radio-default.md';
import FormCheckboxRadioInlineDocs from './docs/checkbox-radio-inline.md';
import FormCheckboxRadioWOLabelDocs from './docs/checkbox-radio-wo-label.md';
import FormGroupsDocs from './docs/form-groups.md';
import FormGridDocs from './docs/form-grid.md';
import FormMoreComplexDocs from './docs/form-more-complex.md';
import FormHorizontalDocs from './docs/horizontal.md';
import FormSizesDocs from './docs/sizes.md';

storiesOf('Forms', module)
  .add('Simple', withReadme(FormReadme, withDocs(FormSimpleDocs, () => (
    <Container fluid style={{ textAlign: 'left' }}>
      <form>
        <FormGroup>
          <Label>Email address</Label>
          <FormControl type="email" placeholder="Enter email" />
          <FormText muted>We&#39;ll never share your email with anyone else.</FormText>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <FormControl type="password" placeholder="Password" />
        </FormGroup>
        <FormCheck>
          <FormCheckInput type="checkbox" />
          <Label>Check me out</Label>
        </FormCheck>
        <FormGroup>
          <Button primary>Submit</Button>
        </FormGroup>
      </form>
    </Container>
  ))))
  .add('Form controls', withReadme(FormReadme, withDocs(FormControlsDocs, () => (
    <Container fluid style={{ textAlign: 'left' }}>
      <form>
        <FormGroup>
          <Label>Email address</Label>
          <FormControl type="email" placeholder="name@example.com" />
        </FormGroup>
        <FormGroup>
          <Label>Example select</Label>
          <FormControl select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <Label>Example multiple select</Label>
          <FormControl select multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <Label>Example textarea</Label>
          <FormControl textarea rows="3" />
        </FormGroup>
        <FormGroup>
          <Label>Example file input</Label>
          <FormControlFile type="file" />
        </FormGroup>
      </form>
    </Container>
  ))))
  .add('Sizing', withReadme(FormReadme, withDocs(FormSizingDocs, () => (
    <Container fluid style={{ textAlign: 'left' }}>
      <form>
        <FormControl mb="0.5rem" lg type="text" placeholder="<FormControl lg />" />
        <FormControl mb="0.5rem" type="text" placeholder="<FormControl />" />
        <FormControl mb="0.5rem" sm type="text" placeholder="<FormControl sm />" />
      </form>
      <form>
        <FormControl mb="0.5rem" select lg>
          <option>{'<FormControl select lg>...</FormControl>'}</option>
        </FormControl>
        <FormControl mb="0.5rem" select>
          <option>{'<FormControl select>...</FormControl>'}</option>
        </FormControl>
        <FormControl mb="0.5rem" select sm>
          <option>{'<FormControl select sm>...</FormControl>'}</option>
        </FormControl>
      </form>
    </Container>
  ))))
  .add('Readonly', withReadme(FormReadme, withDocs(FormReadonlyDocs, () => (
    <Container fluid style={{ textAlign: 'left' }}>
      <form>
        <FormControl readonly disabled type="text" placeholder="Readonly input here..." />
      </form>
    </Container>
  ))))
  .add('Readonly plain text', withReadme(FormReadme, withDocs(FormReadonlyPlainTextDocs, () => (
    <Container fluid style={{ textAlign: 'left' }}>
      <form>
        <FormGroup row>
          <Column sm={3}>
            <Label>Email</Label>
          </Column>
          <Column sm={9}>
            <FormControlPlainText readonly disabled value="email@example.com" />
          </Column>
        </FormGroup>
        <FormGroup row>
          <Column sm={3}>
            <Label>Password</Label>
          </Column>
          <Column sm={9}>
            <FormControl type="password" value="Password" />
          </Column>
        </FormGroup>
      </form>
    </Container>
  ))))
  .add('Inline', withReadme(FormReadme, withDocs(FormInlineDocs, () => (
    <Container fluid style={{ textAlign: 'left' }}>
      <FormInline>
        <FormGroup>
          <FormControlPlainText type="text" readonly disabled value="email@example.com" />
        </FormGroup>
        <FormGroup style={{ marginRight: '1rem' }}>
          <FormControl type="password" placeholder="Password" />
        </FormGroup>
        <FormGroup>
          <Button primary>Confirm identity</Button>
        </FormGroup>
      </FormInline>
    </Container>
  ))))
  .add('Checkboxes and radios default stacked', withReadme(FormReadme, withDocs(FormCheckboxRadioDefaultDocs, () => (
    <Container fluid style={{ textAlign: 'left' }}>
      <form>
        <FormCheck>
          <FormCheckInput type="checkbox" />
          <Label>Default checkbox</Label>
        </FormCheck>
        <FormCheck>
          <FormCheckInput disabled type="checkbox" />
          <Label>Disabled checkbox</Label>
        </FormCheck>
        <FormCheck>
          <FormCheckInput type="radio" name="exampleRadios" />
          <Label>Default radio</Label>
        </FormCheck>
        <FormCheck>
          <FormCheckInput type="radio" name="exampleRadios" />
          <Label>Second default radio</Label>
        </FormCheck>
        <FormCheck>
          <FormCheckInput disabled type="radio" name="exampleRadios" />
          <Label>Disabled radio</Label>
        </FormCheck>
      </form>
    </Container>
  ))))
  .add('Checkboxes and radios inline', withReadme(FormReadme, withDocs(FormCheckboxRadioInlineDocs, () => (
    <Container fluid style={{ textAlign: 'left' }}>
      <form>
        <FormCheck inline>
          <FormCheckInput type="checkbox" />
          <Label>1</Label>
        </FormCheck>
        <FormCheck inline>
          <FormCheckInput type="checkbox" />
          <Label>2</Label>
        </FormCheck>
        <FormCheck inline>
          <FormCheckInput disabled type="checkbox" />
          <Label>3 (disabled)</Label>
        </FormCheck>
      </form>
      <form>
        <FormCheck inline>
          <FormCheckInput type="radio" name="exampleRadios" />
          <Label>1</Label>
        </FormCheck>
        <FormCheck inline>
          <FormCheckInput type="radio" name="exampleRadios" />
          <Label>2</Label>
        </FormCheck>
        <FormCheck inline>
          <FormCheckInput disabled type="radio" name="exampleRadios" />
          <Label>3 (disabled)</Label>
        </FormCheck>
      </form>
    </Container>
  ))))
  .add('Checkboxes and radios without label', withReadme(FormReadme, withDocs(FormCheckboxRadioWOLabelDocs, () => (
    <Container fluid style={{ textAlign: 'left' }}>
      <form>
        <FormCheck>
          <FormCheckInput type="checkbox" />
        </FormCheck>
        <FormCheck>
          <FormCheckInput type="radio" name="exampleRadios" />
        </FormCheck>
      </form>
    </Container>
  ))))
  .add('Form groups', withReadme(FormReadme, withDocs(FormGroupsDocs, () => (
    <Container fluid style={{ textAlign: 'left' }}>
      <form>
        <FormGroup>
          <Label>Example label</Label>
          <FormControl type="text" placeholder="Example input" />
        </FormGroup>
        <FormGroup>
          <Label>Another label</Label>
          <FormControl type="text" placeholder="Another input" />
        </FormGroup>
      </form>
    </Container>
  ))))
  .add('Form Grid', withReadme(FormReadme, withDocs(FormGridDocs, () => (
    <Container fluid style={{ textAlign: 'left' }}>
      <form>
        <FormGroup row>
          <Column sm={6}>
            <FormControl type="text" placeholder="First name" />
          </Column>
          <Column sm={6}>
            <FormControl type="text" placeholder="Last name" />
          </Column>
        </FormGroup>
      </form>
    </Container>
  ))))
  .add('More complex', withReadme(FormReadme, withDocs(FormMoreComplexDocs, () => (
    <Container fluid style={{ textAlign: 'left' }}>
      <form>
        <FormGroup row nomb>
          <Column sm={6}>
            <FormGroup>
              <Label>Email</Label>
              <FormControl type="text" placeholder="Email" />
            </FormGroup>
          </Column>
          <Column sm={6}>
            <FormGroup>
              <Label>Password</Label>
              <FormControl type="password" placeholder="Password" />
            </FormGroup>
          </Column>
        </FormGroup>
        <FormGroup row nomb>
          <Column sm={12}>
            <FormGroup>
              <Label>Address</Label>
              <FormControl type="text" placeholder="1234 Main St" />
            </FormGroup>
          </Column>
        </FormGroup>
        <FormGroup row>
          <Column sm={12}>
            <FormGroup>
              <Label>Address 2</Label>
              <FormControl type="text" placeholder="Apartment, Studio, or floor" />
            </FormGroup>
          </Column>
        </FormGroup>
        <FormGroup row nomb>
          <Column sm={6}>
            <FormGroup>
              <Label>City</Label>
              <FormControl type="text" />
            </FormGroup>
          </Column>
          <Column sm={4}>
            <FormGroup>
              <Label>State</Label>
              <FormControl select>
                <option>Choose...</option>
                <option>...</option>
              </FormControl>
            </FormGroup>
          </Column>
          <Column sm={2}>
            <FormGroup>
              <Label>Zip</Label>
              <FormControl type="text" />
            </FormGroup>
          </Column>
        </FormGroup>
        <FormGroup row>
          <Column sm={12}>
            <FormCheck>
              <FormCheckInput type="checkbox" />
              <Label>Check me out</Label>
            </FormCheck>
          </Column>
        </FormGroup>
        <FormGroup row nomb>
          <Column sm={12}>
            <Button primary>Submit</Button>
          </Column>
        </FormGroup>
      </form>
    </Container>
  ))))
  .add('Horizontal form', withReadme(FormReadme, withDocs(FormHorizontalDocs, () => (
    <Container fluid style={{ textAlign: 'left' }}>
      <form>
        <FormGroup row justify>
          <Column sm={2}>
            <Label>Email</Label>
          </Column>
          <Column sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Column>
        </FormGroup>
        <FormGroup row justify>
          <Column sm={2}>
            <Label>Password</Label>
          </Column>
          <Column sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Column>
        </FormGroup>
        <FormGroup row>
          <Column sm={2}>
            <Label>Radios</Label>
          </Column>
          <Column sm={10}>
            <FormCheck>
              <FormCheckInput type="radio" name="exampleRadios" />
              <Label>First radio</Label>
            </FormCheck>
            <FormCheck>
              <FormCheckInput type="radio" name="exampleRadios" />
              <Label>Second radio</Label>
            </FormCheck>
            <FormCheck>
              <FormCheckInput disabled type="radio" name="exampleRadios" />
              <Label>Third disabled radio</Label>
            </FormCheck>
          </Column>
        </FormGroup>
        <FormGroup row>
          <Column sm={2}>
            <Label>Checkbox</Label>
          </Column>
          <Column sm={10}>
            <FormCheck>
              <FormCheckInput type="checkbox" name="exampleRadios" />
              <Label>Example checkbox</Label>
            </FormCheck>
          </Column>
        </FormGroup>
        <FormGroup row>
          <Column sm={12}>
            <Button primary>Sign in</Button>
          </Column>
        </FormGroup>
      </form>
    </Container>
  ))))
  .add('Sizes', withReadme(FormReadme, withDocs(FormSizesDocs, () => (
    <Container fluid style={{ textAlign: 'left' }}>
      <form>
        <FormGroup row justify sm>
          <Column sm={2}>
            <Label>Email</Label>
          </Column>
          <Column sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Column>
        </FormGroup>
        <FormGroup row justify>
          <Column sm={2}>
            <Label>Email</Label>
          </Column>
          <Column sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Column>
        </FormGroup>
        <FormGroup row justify lg>
          <Column sm={2}>
            <Label>Email</Label>
          </Column>
          <Column sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Column>
        </FormGroup>
      </form>
    </Container>
  ))));

