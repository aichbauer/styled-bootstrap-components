import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { DropdownMenu } from '../../src';

test('Events are added and removed on DropdownMenu', () => {
  const dropdownMenu = renderer.create(<DropdownMenu />);
  dropdownMenu.unmount();
});
