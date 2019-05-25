import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { DropdownMenu } from '../../src';

const fakeElement = { contains: () => false };
fakeElement.parentNode = fakeElement;
const createNodeMock = () => fakeElement;

test('Closed DropdownMenu ignores click', () => {
  const toggle = jest.fn();

  const dropdownMenu = renderer.create(<DropdownMenu hidden toggle={toggle} />);

  dropdownMenu.getInstance().handleDocumentClick();

  expect(toggle.mock.calls.length).toBe(0);
});

test('DropdownMenu ignores click on container or it\'s neighbours', () => {
  const toggle = jest.fn();

  const dropdownMenu = renderer.create(<DropdownMenu toggle={toggle} />, { createNodeMock });

  dropdownMenu.getInstance().handleDocumentClick({
    target: dropdownMenu.getInstance().container.current,
  });

  expect(toggle.mock.calls.length).toBe(0);
});

test('DropdownMenu toggles on click outside of container', () => {
  const toggle = jest.fn();

  const dropdownMenu = renderer.create(<DropdownMenu toggle={toggle} />, { createNodeMock });

  dropdownMenu.getInstance().handleDocumentClick({
    target: 'someElement',
  });

  expect(toggle.mock.calls.length).toBe(1);
});
