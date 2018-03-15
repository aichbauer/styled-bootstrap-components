import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Tr } from '../../src';

test('Styles matches Tr active hover', () => {
  const tree = renderer.create(<Tr active hover />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background-color', 'rgba(0,0,0,0.075)', {
    modifier: '& > th',
  });
  expect(tree).toHaveStyleRule('background-color', 'rgba(0,0,0,0.075)', {
    modifier: '& > td',
  });
  expect(tree).toHaveStyleRule('background-color', 'rgba(0,0,0,0.075)', {
    modifier: '& tbody tr:hover',
  });
  expect(tree).toHaveStyleRule('background-color', 'rgba(0,0,0,0.075)', {
    modifier: '& tbody tr:hover > th',
  });
  expect(tree).toHaveStyleRule('background-color', 'rgba(0,0,0,0.075)', {
    modifier: '& tbody tr:hover > td',
  });
});
