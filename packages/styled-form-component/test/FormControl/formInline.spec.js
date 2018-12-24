import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormControl } from '../../src';

test('Styles matches FormControl formInline', () => {
  const tree = renderer.create(<FormControl formInline />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'inline-block', {
    media: '(min-width: 576px)',
  });
  expect(tree).toHaveStyleRule('width', 'auto', {
    media: '(min-width: 576px)',
  });
  expect(tree).toHaveStyleRule('vertical-align', 'middle', {
    media: '(min-width: 576px)',
  });
});
