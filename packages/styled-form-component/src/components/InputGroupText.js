import styled from 'styled-components';

import { Span } from 'styled-base-components';

import {
  theme,
  getColor,
  getPadding,
  getFontSize,
  getFontWeight,
  getMargin,
  getBorderRadius,
  getBorder,
} from 'styled-config';

const InputGroupText = styled(Span)`
  display: flex;
  align-items: center;
  padding: ${(props) => getPadding(props, 'inputGroupText', 'default')};
  margin-bottom: ${(props) => getMargin(props, 'inputGroupText', 'bottom')};
  font-size: ${(props) => getFontSize(props, 'inputGroupText', 'default')};
  font-weight: ${(props) => getFontWeight(props, 'inputGroupText', 'default')};
  line-height: 1.5;
  color: ${(props) => getColor(props, 'inputGroupText', 'color')};
  text-align: center;
  white-space: nowrap;
  background-color: ${(props) => getColor(props, 'inputGroupText', 'backgroundColor')};
  border: ${(props) => getBorder(props, 'inputGroupText', 'default')} ${(props) => getColor(props, 'inputGroupText', 'borderColor')};
  border-radius: ${(props) => getBorderRadius(props, 'inputGroupText', 'default')};
  & input[type="radio"],
  & input[type="checkbox"] {
    margin-top: ${(props) => getMargin(props, 'inputGroupText', 'radioCheckboxTop')};
    margin-right: ${(props) => getMargin(props, 'inputGroupText', 'radioCheckboxRight')};
    margin-bottom: ${(props) => getMargin(props, 'inputGroupText', 'radioCheckboxBottom')};
  };
`;

InputGroupText.defaultProps = {
  theme,
};

export { InputGroupText };
