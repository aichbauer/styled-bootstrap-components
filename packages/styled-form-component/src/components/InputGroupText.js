import styled from 'styled-components';

import { Span } from 'styled-base-components';

import {
  theme,
  getColor,
  padding,
  fontSize,
  fontWeight,
  margin,
  borderRadius,
  border,
} from 'styled-config';

const InputGroupText = styled(Span)`
  display: flex;
  align-items: center;
  padding: ${(props) => padding(props, 'inputGroupText').default};
  margin-bottom: ${(props) => margin(props, 'inputGroupText').bottom};
  font-size: ${(props) => fontSize(props, 'inputGroupText').default};
  font-weight: ${(props) => fontWeight(props, 'inputGroupText').default};
  line-height: 1.5;
  color: ${(props) => getColor(props, 'inputGroupText', 'color')};
  text-align: center;
  white-space: nowrap;
  background-color: ${(props) => getColor(props, 'inputGroupText', 'backgroundColor')};
  border: ${(props) => border(props, 'inputGroupText').default} ${(props) => getColor(props, 'inputGroupText', 'borderColor')};
  border-radius: ${(props) => borderRadius(props, 'inputGroupText').default};
  & input[type="radio"],
  & input[type="checkbox"] {
    margin-top: ${(props) => margin(props, 'inputGroupText').radioCheckboxTop};
    margin-right: ${(props) => margin(props, 'inputGroupText').radioCheckboxRight};
    margin-bottom: ${(props) => margin(props, 'inputGroupText').radioCheckboxBottom};
  };
`;

InputGroupText.defaultProps = {
  theme,
};

export { InputGroupText };
