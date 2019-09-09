import React from 'react';
import styled, { css } from 'styled-components';

import { H1, H2, H3, H4, H5, H6 } from 'styled-base-components';

import {
  theme,
  getColor,
  getMargin,
} from 'styled-config';

const margin = (props) => (
  props.subtitle &&
  css`
    margin-top: ${getMargin(props, 'cardTitle', 'subtitleTop')};
    margin-bottom: ${getMargin(props, 'cardTitle', 'subtitleBottom')};
  `
);

const color = (props) => (
  props.muted &&
  css`
    color: ${getColor(props, 'cardTitle', 'colorMuted')};
  `
);

const cardTitleStyle = () => css`
    margin-bottom: ${(props) => getMargin(props, 'cardTitle', 'bottom')};
    ${(props) => margin(props)};
    ${(props) => color(props)};
  `;

const CardTitleH1 = styled(H1)`
  ${cardTitleStyle};
`;

const CardTitleH2 = styled(H2)`
  ${cardTitleStyle};
`;

const CardTitleH3 = styled(H3)`
  ${cardTitleStyle};
`;

const CardTitleH4 = styled(H4)`
  ${cardTitleStyle};
`;

const CardTitleH5 = styled(H5)`
  ${cardTitleStyle};
`;

const CardTitleH6 = styled(H6)`
  ${cardTitleStyle};
`;

const CardTitle = (props) => {
  if (props.h1) {
    return <CardTitleH1 {...props} />;
  } else if (props.h2) {
    return <CardTitleH2 {...props} />;
  } else if (props.h3) {
    return <CardTitleH3 {...props} />;
  } else if (props.h4) {
    return <CardTitleH4 {...props} />;
  } else if (props.h5) {
    return <CardTitleH5 {...props} />;
  } else if (props.h6) {
    return <CardTitleH6 {...props} />;
  }

  return <CardTitleH4 {...props} />;
};

CardTitle.defaultProps = {
  theme,
};

export { CardTitle };
