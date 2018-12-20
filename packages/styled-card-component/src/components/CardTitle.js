import React from 'react';
import styled, { css } from 'styled-components';

import {
  theme,
  colors,
  margin as m,
} from 'styled-config';

const margin = (props) => (
  props.subtitle &&
  css`
    margin-top: ${m(props, 'cardTitle').subtitleTop};
    margin-bottom: ${m(props, 'cardTitle').subtitleBottom};
  `
);

const color = (props) => (
  props.muted &&
  css`
    color: ${colors(props, 'cardTitle').colorMuted};
  `
);

const cardTitleStyle = () => css`
    margin-bottom: ${(props) => m(props, 'cardTitle').bottom};
    ${(props) => margin(props)};
    ${(props) => color(props)};
  `;

const CardTitleH1 = styled.h1`
  ${cardTitleStyle};
`;

const CardTitleH2 = styled.h2`
  ${cardTitleStyle};
`;

const CardTitleH3 = styled.h3`
  ${cardTitleStyle};
`;

const CardTitleH4 = styled.h4`
  ${cardTitleStyle};
`;

const CardTitleH5 = styled.h5`
  ${cardTitleStyle};
`;

const CardTitleH6 = styled.h6`
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
