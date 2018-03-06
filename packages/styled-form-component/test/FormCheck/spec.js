import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormCheck } from '../../src';

test('Styles matches FormCheck', () => {
  const tree = renderer.create(<FormCheck />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('position', 'relative');
  expect(tree).toHaveStyleRule('display', 'block');
  expect(tree).toHaveStyleRule('box-sizing', 'border-box');
  expect(tree).toHaveStyleRule('margin-bottom', '0', {
    modifier: '& > label',
  });
  expect(tree).toHaveStyleRule('position', 'static', {
    modifier: '& > input',
  });
  expect(tree).toHaveStyleRule('margin-top', '0', {
    modifier: '& > input',
  });
  expect(tree).toHaveStyleRule('margin-right', '0.3125rem', {
    modifier: '& > input',
  });
  expect(tree).toHaveStyleRule('margin-left', '0', {
    modifier: '& > input',
  });
});
