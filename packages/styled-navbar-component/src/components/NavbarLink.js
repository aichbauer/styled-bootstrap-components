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
import { NavLink } from 'styled-nav-component';

const navbarLinkLight = (props) => {
  if (props.light) {
    if (props.active) {
      return css`
        color: rgba(0, 0, 0, 0.9);
        &:hover,
        &:focus {
          color: rgba(0, 0, 0, 0.9);
        };
      `;
    } else if (props.disabled) {
      return css`
        color: rgba(0, 0, 0, 0.3);
        &:hover,
        &:focus {
          color: rgba(0, 0, 0, 0.3);
        };
      `;
    }

    return css`
      color: rgba(0, 0, 0, 0.5);
      &:hover,
      &:focus {
        color: rgba(0, 0, 0, 0.7);
      };
    `;
  }

  return '';
};

const navbarLinkDark = (props) => {
  if (props.dark) {
    if (props.active) {
      return css`
        color: rgba(255, 255, 255, 0.9);
        &:hover,
        &:focus {
          color: rgba(255, 255, 255, 0.9);
        };
      `;
    } else if (props.disabled) {
      return css`
        color: rgba(255, 255, 255, 0.25);
        &:hover,
        &:focus {
          color: rgba(255, 255, 255, 0.25);
        };
      `;
    }

    return css`
      color: rgba(255, 255, 255, 0.5);
      &:hover,
      &:focus {
        color: rgba(255, 255, 255, 0.75);
      };
    `;
  }

  return '';
};

const navbarLinkBrand = (props) => (
  props.brand &&
  css`
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
  `
);

export const NavbarLink = styled(NavLink)`
  ${navbarLinkBrand};
  ${navbarLinkLight};
  ${navbarLinkDark};
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

