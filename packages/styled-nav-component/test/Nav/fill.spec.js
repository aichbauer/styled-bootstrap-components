import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Nav } from '../../src';

test('Styles matches Nav fill', () => {
  const tree = renderer.create(<Nav fill />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex', '1 1 auto', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('text-align', 'center', {
    modifier: '& > a',
  });
});
