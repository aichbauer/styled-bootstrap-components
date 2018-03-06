import styled, { css } from 'styled-components';
import {
  space,
  color,
  width,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  display,
  borderRadius,
  borderColor,
  borders,
} from 'styled-system';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
} from 'styled-base-components';

const popoverHeaderBottom = (props) => (
  props.bottom &&
  css`
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: 1rem;
    margin-left: -0.5rem;
    content: "";
    border-bottom: 1px solid #f7f7f7;
  `
);

const popoverHeaderStyle = () => (
  css`
    padding: 0.5rem 0.75rem;
    margin-bottom: 0;
    font-size: 1rem;
    color: inherit;
    background-color: #f7f7f7;
    border-bottom: 1px solid #ebebeb;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
    ${popoverHeaderBottom};
    &:empty {
      display: none;
    };
    ${space};
    ${width};
    ${color};
    ${fontSize};
    ${fontWeight};
    ${textAlign};
    ${lineHeight};
    ${display};
    ${borderRadius};
    ${borderColor};
    ${borders};
  `
);

const PopoverHeaderH1 = styled(H1)`
  ${popoverHeaderStyle};
`;

const PopoverHeaderH2 = styled(H2)`
  ${popoverHeaderStyle};
`;

const PopoverHeaderH3 = styled(H3)`
  ${popoverHeaderStyle};
`;

const PopoverHeaderH4 = styled(H4)`
  ${popoverHeaderStyle};
`;

const PopoverHeaderH5 = styled(H5)`
  ${popoverHeaderStyle};
`;

const PopoverHeaderH6 = styled(H6)`
  ${popoverHeaderStyle};
`;

export const PopoverHeader = (props) => {
  if (props.h1) {
    return new PopoverHeaderH1(props);
  } else if (props.h2) {
    return new PopoverHeaderH2(props);
  } else if (props.h3) {
    return new PopoverHeaderH3(props);
  } else if (props.h4) {
    return new PopoverHeaderH4(props);
  } else if (props.h5) {
    return new PopoverHeaderH5(props);
  } else if (props.h6) {
    return new PopoverHeaderH6(props);
  }

  return new PopoverHeaderH4(props);
};
