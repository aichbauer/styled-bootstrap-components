import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../../../packages/styled-button-component';
import { Column } from '../../../packages/styled-grid-system-component';
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

storiesOf('Form', module)
  .addParameters({
    readme: { sidebar: FormReadme },
  })
  .add('simple', () => (
    <form>
      <FormGroup>
        <label>Email address <FormControl type="email" placeholder="Enter email" /></label>
        <FormText muted>We&#39;ll never share your email with anyone else.</FormText>
      </FormGroup>
      <FormGroup>
        <label>Password <FormControl type="password" placeholder="Password" /></label>
      </FormGroup>
      <FormCheck>
        <label><FormCheckInput type="checkbox" /> Check me out</label>
      </FormCheck>
      <FormGroup>
        <Button block primary>Submit</Button>
      </FormGroup>
    </form>
  ))
  .add('different fields', () => (
    <form>
      <FormGroup>
        <label>Email address <FormControl type="email" placeholder="name@example.com" /></label>
      </FormGroup>
      <FormGroup>
        <label>
          Example select
          <FormControl select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </FormControl>
        </label>
      </FormGroup>
      <FormGroup>
        <label>
          Example multiple select
          <FormControl select multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </FormControl>
        </label>
      </FormGroup>
      <FormGroup>
        <label>
          Example textarea
          <FormControl textarea rows="3" />
        </label>
      </FormGroup>
      <FormGroup>
        <label>
          Example file input
          <FormControlFile type="file" />
        </label>
      </FormGroup>
    </form>
  ))
  .add('sizes', () => (
    <form>
      <FormControl mb2 lg type="text" placeholder="Large" />
      <FormControl mb2 type="text" placeholder="Normal" />
      <FormControl mb2 sm type="text" placeholder="Small" />
    </form>
  ))
  .add('sizes on groups', () => (
    <form>
      <FormGroup row justify lg mb2>
        <FormControl type="text" placeholder="Large" />
      </FormGroup>
      <FormGroup row justify mb2>
        <FormControl type="text" placeholder="Normal" />
      </FormGroup>
      <FormGroup row justify sm mb2>
        <FormControl type="text" placeholder="Small" />
      </FormGroup>
    </form>
  ))
  .add('readonly', () => (
    <FormControl readonly disabled type="text" placeholder="Readonly input here..." />
  ))
  .add('readonly plain text', () => (
    <form>
      <FormControlPlainText readonly disabled value="Readonly input here..." />
    </form>
  ))
  .add('inline', () => (
    <FormInline>
      <FormGroup>
        <FormControlPlainText type="text" readonly disabled value="email@example.com" />
      </FormGroup>
      <FormGroup mr4>
        <FormControl type="password" placeholder="Password" />
      </FormGroup>
      <FormGroup>
        <Button primary>Confirm identity</Button>
      </FormGroup>
    </FormInline>
  ))
  .add('checkboxes and radios', () => (
    <form>
      <FormCheck>
        <label><FormCheckInput type="checkbox" /> Default checkbox</label>
      </FormCheck>
      <FormCheck>
        <label><FormCheckInput disabled type="checkbox" /> Disabled checkbox</label>
      </FormCheck>
      <FormCheck>
        <label><FormCheckInput type="radio" name="exampleRadios" /> Default radio</label>
      </FormCheck>
      <FormCheck>
        <label><FormCheckInput type="radio" name="exampleRadios" /> Default radio</label>
      </FormCheck>
      <FormCheck>
        <label><FormCheckInput disabled type="radio" name="exampleRadios" /> Disabled radio</label>
      </FormCheck>
    </form>
  ))
  .add('inline checkboxes and radios', () => (
    <form>
      <FormCheck inline>
        <label><FormCheckInput type="checkbox" /> Default checkbox</label>
      </FormCheck>
      <FormCheck inline>
        <label><FormCheckInput disabled type="checkbox" /> Disabled checkbox</label>
      </FormCheck>
      <FormCheck inline>
        <label><FormCheckInput type="radio" name="exampleRadios" /> Default radio</label>
      </FormCheck>
      <FormCheck inline>
        <label><FormCheckInput type="radio" name="exampleRadios" /> Default radio</label>
      </FormCheck>
      <FormCheck inline>
        <label><FormCheckInput disabled type="radio" name="exampleRadios" /> Disabled radio</label>
      </FormCheck>
    </form>
  ))
  .add('form grid', () => (
    <form>
      <FormGroup row>
        <Column sm={6}>
          <FormControl type="text" placeholder="First name" />
        </Column>
        <Column sm={6}>
          <FormControl type="text" placeholder="Last name" />
        </Column>
      </FormGroup>
      <FormGroup row>
        <Column sm={8}>
          <FormControl type="text" placeholder="City" />
        </Column>
        <Column sm={4}>
          <FormGroup>
            <FormControl select>
              <option>Choose state...</option>
              <option>...</option>
            </FormControl>
          </FormGroup>
        </Column>
      </FormGroup>
    </form>
  ))
  .add('horizontal form', () => (
    <form>
      <FormGroup row justify>
        <Column sm={2}>
          <label>First name</label>
        </Column>
        <Column sm={10}>
          <FormControl type="text" placeholder="First name" />
        </Column>
      </FormGroup>
      <FormGroup row justify>
        <Column sm={2}>
          <label>Last name</label>
        </Column>
        <Column sm={10}>
          <FormControl type="text" placeholder="Last name" />
        </Column>
      </FormGroup>
    </form>
  ));
