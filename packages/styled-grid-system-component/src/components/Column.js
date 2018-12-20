import styled from 'styled-components';

import { theme } from 'styled-config';

const calcFlex = (size) => {
  switch (size) {
    case 1:
      return '0 0 8.333333%';
    case 2:
      return '0 0 16.666667%';
    case 3:
      return '0 0 25%';
    case 4:
      return '0 0 33.333333%';
    case 5:
      return '0 0 41.666667%';
    case 6:
      return '0 0 50%';
    case 7:
      return '0 0 58.333333%';
    case 8:
      return '0 0 66.666667%';
    case 9:
      return '0 0 75%';
    case 10:
      return '0 0 83.333333%';
    case 11:
      return '0 0 91.666667%';
    default:
    case 12:
      return '0 0 100%';
  }
};

export const smFlex = (props) => {
  if (props.xl || props.md || props.lg) {
    return '0 0 100%';
  }

  if (props.sm) {
    return calcFlex(props.sm);
  }

  return '0 0 100%';
};

export const mdFlex = (props) => {
  if (props.lg || props.xl) {
    return '0 0 100%';
  }

  if (props.sm || props.md) {
    return calcFlex(props.sm || props.md);
  }

  return '0 0 100%';
};

export const lgFlex = (props) => {
  if (props.xl) {
    return '0 0 100%';
  }

  if (props.sm || props.md || props.lg) {
    return calcFlex(props.sm || props.md || props.lg);
  }

  return '0 0 100%';
};

const Column = styled.div`
  box-sizing: border-box;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 100%;
  overflow: hidden;
  word-break: break-all;
  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    flex: ${(props) => smFlex(props)};
  };
  @media (min-width: ${(props) => props.theme.screenSize.md}) {
    flex: ${(props) => mdFlex(props)};
  };
  @media (min-width: ${(props) => props.theme.screenSize.lg}) {
    flex: ${(props) => lgFlex(props)};
  };
  @media (min-width: ${(props) => props.theme.screenSize.xl}) {
    flex: ${(props) => calcFlex(props.sm || props.md || props.lg || props.xl)};
  };
`;

Column.defaultProps = {
  theme,
};

export { Column };
