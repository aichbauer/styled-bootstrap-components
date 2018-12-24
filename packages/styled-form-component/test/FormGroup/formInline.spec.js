import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormGroup } from '../../src';

test('Styles matches FormGroup formInline', () => {
  const tree = renderer.create(<FormGroup formInline />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'flex', {
    media: '(min-width: 576px)',
  });
  expect(tree).toHaveStyleRule('flex', '0 0 auto', {
    media: '(min-width: 576px)',
  });
  expect(tree).toHaveStyleRule('flex-flow', 'row wrap', {
    media: '(min-width: 576px)',
  });
  expect(tree).toHaveStyleRule('align-items', 'center', {
    media: '(min-width: 576px)',
  });
  expect(tree).toHaveStyleRule('margin-bottom', '0', {
    media: '(min-width: 576px)',
  });
});
