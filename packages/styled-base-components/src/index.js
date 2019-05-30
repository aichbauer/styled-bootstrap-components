import styled from 'styled-components';

import { BootstrapBaseCss } from './components/globalStyle';
import { Utilities } from './components/utilityStyle';

const P = styled.p`${Utilities};`;
const A = styled.a`${Utilities};`;
const H1 = styled.h1`${Utilities};`;
const H2 = styled.h2`${Utilities};`;
const H3 = styled.h3`${Utilities};`;
const H4 = styled.h4`${Utilities};`;
const H5 = styled.h5`${Utilities};`;
const H6 = styled.h6`${Utilities};`;
const Div = styled.div`${Utilities};`;
const Span = styled.span`${Utilities};`;

export {
  BootstrapBaseCss,
  Utilities,
  P,
  A,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Div,
  Span,
};
