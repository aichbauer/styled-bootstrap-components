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

const badgePill = (props) => (
  props.pill &&
  css`
    padding-right: 0.6em;
    padding-left: 0.6em;
    border-radius: 10rem;
  `
);

const badgePrimary = (props) => {
  if (props.primary) {
    if (props.action) {
      return css`
        color: #fff;
        background-color: #007bff;
        & > a {
          text-decoration: none;
          color: #fff;
          &:hover, &:focus {
            text-decoration: none;
            color: #fff;
          };
        };
        &:hover,
        &:focus {
          background-color: #0062cc; 
        };
      `;
    }

    return css`
      color: #fff;
      background-color: #007bff;
    `;
  }

  return '';
};

const badgeSecondary = (props) => {
  if (props.secondary) {
    if (props.action) {
      return css`
        color: #fff;
        background-color: #6c757d;
        & > a {
          text-decoration: none;
          color: #fff;
          &:hover, &:focus {
            text-decoration: none;
            color: #fff;
          };
        };
        &:hover, &:focus {
          background-color: #545b62; 
        };
      `;
    }

    return css`
      color: #fff;
      background-color: #6c757d;
    `;
  }

  return '';
};

const badgeSuccess = (props) => {
  if (props.success) {
    if (props.action) {
      return css`
        color: #fff;
        background-color: #28a745;
        & > a {
          text-decoration: none;
          color: #fff;
          &:hover, &:focus {
            text-decoration: none;
            color: #fff;
          };
        };
        &:hover, &:focus {
          background-color: #1e7e34; 
        };
      `;
    }

    return css`
      color: #fff;
      background-color: #28a745;
    `;
  }

  return '';
};

const badgeInfo = (props) => {
  if (props.info) {
    if (props.action) {
      return css`
        color: #fff;
        background-color: #17a2b8;
        & > a {
          text-decoration: none;
          color: #fff;
          &:hover, &:focus {
            text-decoration: none;
            color: #fff;
          };
        };
        &:hover, &:focus {
          background-color: #117a8b; 
        };
      `;
    }

    return css`
      color: #fff;
      background-color: #17a2b8;
    `;
  }

  return '';
};

const badgeWarning = (props) => {
  if (props.warning) {
    if (props.action) {
      return css`
        color: #212529;
        background-color: #ffc107;
        & > a {
          text-decoration: none;
          color: #212529;
          &:hover, &:focus {
            text-decoration: none;
            color: #212529;
          };
        };
        &:hover, &:focus {
          background-color: #d39e00; 
        };
      `;
    }

    return css`
      color: #212529;
      background-color: #ffc107;
    `;
  }

  return '';
};

const badgeDanger = (props) => {
  if (props.danger) {
    if (props.action) {
      return css`
        color: #fff;
        background-color: #dc3545;
        & > a {
          text-decoration: none;
          color: #fff;
          &:hover, &:focus {
            text-decoration: none;
            color: #fff;
          };
        };
        &:hover, &:focus {
          background-color: #bd2130; 
        };
      `;
    }

    return css`
      color: #fff;
      background-color: #dc3545;
    `;
  }

  return '';
};

const badgeLight = (props) => {
  if (props.light) {
    if (props.action) {
      return css`
        color: #212529;
        background-color: #f8f9fa;
        & > a {
          text-decoration: none;
          color: #212529;
          &:hover, &:focus {
            text-decoration: none;
            color: #212529;
          };
        };
        &:hover, &:focus {
          background-color: #dae0e5; 
        };
      `;
    }

    return css`
      color: #212529;
      background-color: #f8f9fa;
    `;
  }

  return '';
};

const badgeDark = (props) => {
  if (props.dark) {
    if (props.action) {
      return css`
        color: #fff;
        background-color: #343a40;
        & > a {
          text-decoration: none;
          color: #fff;
          &:hover, &:focus {
            text-decoration: none;
            color: #fff;
          };
        };
        &:hover, &:focus {
          background-color: #1d2124; 
        };
      `;
    }

    return css`
      color: #fff;
      background-color: #343a40;
    `;
  }

  return '';
};

export const Badge = styled.span`
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  &:empty {
    display: none;
  };
  ${badgePill};
  ${badgePrimary};
  ${badgeSecondary};
  ${badgeSuccess};
  ${badgeInfo};
  ${badgeWarning};
  ${badgeDanger};
  ${badgeLight};
  ${badgeDark};
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
