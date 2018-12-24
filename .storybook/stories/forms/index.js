import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withReadme,
  withDocs,
} from 'storybook-readme';

import { Container } from '../../../packages/styled-container-component';
import { Column } from '../../../packages/styled-grid-system-component';
import { Button } from '../../../packages/styled-button-component';
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
          <label>Email address</label>
          <FormControl type="email" placeholder="Enter email" />
          <FormText muted>We&#39;ll never share your email with anyone else.</FormText>
        </FormGroup>
        <FormGroup>
          <label>Password</label>
          <FormControl type="password" placeholder="Password" />
        </FormGroup>
        <FormCheck>
          <FormCheckInput type="checkbox" />
          <label>Check me out</label>
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
          <label>Email address</label>
          <FormControl type="email" placeholder="name@example.com" />
        </FormGroup>
        <FormGroup>
          <label>Example select</label>
          <FormControl select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <label>Example multiple select</label>
          <FormControl select multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <label>Example textarea</label>
          <FormControl textarea rows="3" />
        </FormGroup>
        <FormGroup>
          <label>Example file input</label>
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
            <label>Email</label>
          </Column>
          <Column sm={9}>
            <FormControlPlainText readonly disabled value="email@example.com" />
          </Column>
        </FormGroup>
        <FormGroup row>
          <Column sm={3}>
            <label>Password</label>
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
          <label>Default checkbox</label>
        </FormCheck>
        <FormCheck>
          <FormCheckInput disabled type="checkbox" />
          <label>Disabled checkbox</label>
        </FormCheck>
        <FormCheck>
          <FormCheckInput type="radio" name="exampleRadios" />
          <label>Default radio</label>
        </FormCheck>
        <FormCheck>
          <FormCheckInput type="radio" name="exampleRadios" />
          <label>Second default radio</label>
        </FormCheck>
        <FormCheck>
          <FormCheckInput disabled type="radio" name="exampleRadios" />
          <label>Disabled radio</label>
        </FormCheck>
      </form>
    </Container>
  ))))
  .add('Checkboxes and radios inline', withReadme(FormReadme, withDocs(FormCheckboxRadioInlineDocs, () => (
    <Container fluid style={{ textAlign: 'left' }}>
      <form>
        <FormCheck inline>
          <FormCheckInput type="checkbox" />
          <label>1</label>
        </FormCheck>
        <FormCheck inline>
          <FormCheckInput type="checkbox" />
          <label>2</label>
        </FormCheck>
        <FormCheck inline>
          <FormCheckInput disabled type="checkbox" />
          <label>3 (disabled)</label>
        </FormCheck>
      </form>
      <form>
        <FormCheck inline>
          <FormCheckInput type="radio" name="exampleRadios" />
          <label>1</label>
        </FormCheck>
        <FormCheck inline>
          <FormCheckInput type="radio" name="exampleRadios" />
          <label>2</label>
        </FormCheck>
        <FormCheck inline>
          <FormCheckInput disabled type="radio" name="exampleRadios" />
          <label>3 (disabled)</label>
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
          <label>Example label</label>
          <FormControl type="text" placeholder="Example input" />
        </FormGroup>
        <FormGroup>
          <label>Another label</label>
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
              <label>Email</label>
              <FormControl type="text" placeholder="Email" />
            </FormGroup>
          </Column>
          <Column sm={6}>
            <FormGroup>
              <label>Password</label>
              <FormControl type="password" placeholder="Password" />
            </FormGroup>
          </Column>
        </FormGroup>
        <FormGroup row nomb>
          <Column sm={12}>
            <FormGroup>
              <label>Address</label>
              <FormControl type="text" placeholder="1234 Main St" />
            </FormGroup>
          </Column>
        </FormGroup>
        <FormGroup row>
          <Column sm={12}>
            <FormGroup>
              <label>Address 2</label>
              <FormControl type="text" placeholder="Apartment, Studio, or floor" />
            </FormGroup>
          </Column>
        </FormGroup>
        <FormGroup row nomb>
          <Column sm={6}>
            <FormGroup>
              <label>City</label>
              <FormControl type="text" />
            </FormGroup>
          </Column>
          <Column sm={4}>
            <FormGroup>
              <label>State</label>
              <FormControl select>
                <option>Choose...</option>
                <option>...</option>
              </FormControl>
            </FormGroup>
          </Column>
          <Column sm={2}>
            <FormGroup>
              <label>Zip</label>
              <FormControl type="text" />
            </FormGroup>
          </Column>
        </FormGroup>
        <FormGroup row>
          <Column sm={12}>
            <FormCheck>
              <FormCheckInput type="checkbox" />
              <label>Check me out</label>
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
            <label>Email</label>
          </Column>
          <Column sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Column>
        </FormGroup>
        <FormGroup row justify>
          <Column sm={2}>
            <label>Password</label>
          </Column>
          <Column sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Column>
        </FormGroup>
        <FormGroup row>
          <Column sm={2}>
            <label>Radios</label>
          </Column>
          <Column sm={10}>
            <FormCheck>
              <FormCheckInput type="radio" name="exampleRadios" />
              <label>First radio</label>
            </FormCheck>
            <FormCheck>
              <FormCheckInput type="radio" name="exampleRadios" />
              <label>Second radio</label>
            </FormCheck>
            <FormCheck>
              <FormCheckInput disabled type="radio" name="exampleRadios" />
              <label>Third disabled radio</label>
            </FormCheck>
          </Column>
        </FormGroup>
        <FormGroup row>
          <Column sm={2}>
            <label>Checkbox</label>
          </Column>
          <Column sm={10}>
            <FormCheck>
              <FormCheckInput type="checkbox" name="exampleRadios" />
              <label>Example checkbox</label>
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
            <label>Email</label>
          </Column>
          <Column sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Column>
        </FormGroup>
        <FormGroup row justify>
          <Column sm={2}>
            <label>Email</label>
          </Column>
          <Column sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Column>
        </FormGroup>
        <FormGroup row justify lg>
          <Column sm={2}>
            <label>Email</label>
          </Column>
          <Column sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Column>
        </FormGroup>
      </form>
    </Container>
  ))));

