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

const cardTitleSubtitle = (props) => (
  props.subtitle &&
  css`
    margin-top: -0.375rem;
    margin-bottom: 0;
  `
);

const cardTitleMuted = (props) => (
  props.muted &&
  css`
    color: #6c757d;
  `
);

const cardTitleStyle = () => css`
    margin-bottom: 0.75rem;
    ${cardTitleSubtitle};
    ${cardTitleMuted};
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
  `;

export const CardTitleH1 = styled(H1)`
  ${cardTitleStyle};
`;

export const CardTitleH2 = styled(H2)`
  ${cardTitleStyle};
`;

export const CardTitleH3 = styled(H3)`
  ${cardTitleStyle};
`;

export const CardTitleH4 = styled(H4)`
  ${cardTitleStyle};
`;

export const CardTitleH5 = styled(H5)`
  ${cardTitleStyle};
`;

export const CardTitleH6 = styled(H6)`
  ${cardTitleStyle};
`;

export const CardTitle = (props) => {
  if (props.h1) {
    return new CardTitleH1(props);
  } else if (props.h2) {
    return new CardTitleH2(props);
  } else if (props.h3) {
    return new CardTitleH3(props);
  } else if (props.h4) {
    return new CardTitleH4(props);
  } else if (props.h5) {
    return new CardTitleH5(props);
  } else if (props.h6) {
    return new CardTitleH6(props);
  }

  return new CardTitleH4(props);
};
