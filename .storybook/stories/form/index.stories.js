import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '../../utils';
import { Alert } from '../../../packages/styled-alert-component';
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

storiesOf('Form', module)
  .add('simple', () => (
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
        <Button block primary>Submit</Button>
      </FormGroup>
    </form>
  ))
  .add('different fields', () => (
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
  ))
  .add('sized', () => (
    <form>
      <FormControl mb2 lg type="text" placeholder="Large" />
      <FormControl mb2 type="text" placeholder="Normal" />
      <FormControl mb2 sm type="text" placeholder="Small" />
    </form>
  ))
  .add('sized groups', () => (
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
        <label>Default radio</label>
      </FormCheck>
      <FormCheck>
        <FormCheckInput disabled type="radio" name="exampleRadios" />
        <label>Disabled radio</label>
      </FormCheck>
    </form>
  ))
  .add('inline checkboxes and radios', () => (
    <form>
      <FormCheck inline>
        <FormCheckInput type="checkbox" />
        <label>Default checkbox</label>
      </FormCheck>
      <FormCheck inline>
        <FormCheckInput disabled type="checkbox" />
        <label>Disabled checkbox</label>
      </FormCheck>
      <FormCheck inline>
        <FormCheckInput type="radio" name="exampleRadios" />
        <label>Default radio</label>
      </FormCheck>
      <FormCheck inline>
        <FormCheckInput type="radio" name="exampleRadios" />
        <label>Default radio</label>
      </FormCheck>
      <FormCheck inline>
        <FormCheckInput disabled type="radio" name="exampleRadios" />
        <label>Disabled radio</label>
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