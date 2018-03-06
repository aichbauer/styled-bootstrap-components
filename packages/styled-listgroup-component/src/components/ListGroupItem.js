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

const listGroupItemActive = (props) => {
  if (props.active) {
    if (props.primary) {
      return css`
        z-index: 2;
        color: #fff;
        background-color: #004085;
        border-color: #004085;
      `;
    } else if (props.secondary) {
      return css`
        z-index: 2;
        color: #fff;
        background-color: #383d41;
        border-color: #383d41;
      `;
    } else if (props.success) {
      return css`
        z-index: 2;
        color: #fff;
        background-color: #155724;
        border-color: #155724;
      `;
    } else if (props.info) {
      return css`
        z-index: 2;
        color: #fff;
        background-color: #0c5460;
        border-color: #0c5460;
      `;
    } else if (props.warning) {
      return css`
        z-index: 2;
        color: #fff;
        background-color: #856404;
        border-color: #856404;
      `;
    } else if (props.danger) {
      return css`
        z-index: 2;
        color: #fff;
        background-color: #721c24;
        border-color: #721c24;
      `;
    } else if (props.light) {
      return css`
        z-index: 2;
        color: #fff;
        background-color: #818182;
        border-color: #818182;
      `;
    } else if (props.dark) {
      return css`
        z-index: 2;
        color: #fff;
        background-color: #1b1e21;
        border-color: #1b1e21;
      `;
    }

    return css`
      z-index: 2;
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
    `;
  }

  return '';
};

const listGroupItemPrimary = (props) => {
  if (props.primary) {
    if (props.action) {
      return css`
        color: #004085;
        background-color: #b8daff;
        & > a:hover,
        & > a:focus {
          color: #004085;
          background-color: #9fcdff;
        };
        &:hover,
        &:focus {
          background-color: #9fcdff;
          cursor: pointer;
        };
        ${listGroupItemActive};
      `;
    }

    return css`
      color: #004085;
      background-color: #b8daff;
      ${listGroupItemActive};
    `;
  }

  return '';
};

const listGroupItemSecondary = (props) => {
  if (props.secondary) {
    if (props.action) {
      return css`
        color: #383d41;
        background-color: #d6d8db;
        & > a:hover,
        & > a:focus {
          color: #383d41;
          background-color: #c8cbcf;
        };
        &:hover,
        &:focus {
          background-color: #c8cbcf;
          cursor: pointer;
        };
        ${listGroupItemActive};
      `;
    }

    return css`
      color: #383d41;
      background-color: #d6d8db;
      ${listGroupItemActive};
    `;
  }

  return '';
};

const listGroupItemSuccess = (props) => {
  if (props.success) {
    if (props.action) {
      return css`
        color: #155724;
        background-color: #c3e6cb;
        & > a:hover,
        & > a:focus {
          color: #155724;
          background-color: #b1dfbb;
        };
        &:hover,
        &:focus {
          background-color: #b1dfbb;
          cursor: pointer;
        };
        ${listGroupItemActive};
      `;
    }

    return css`
      color: #155724;
      background-color: #c3e6cb;
      ${listGroupItemActive};
    `;
  }

  return '';
};

const listGroupItemInfo = (props) => {
  if (props.info) {
    if (props.action) {
      return css`
        color: #0c5460;
        background-color: #bee5eb;
        & > a:hover,
        & > a:focus {
          color: #0c5460;
          background-color: #abdde5;
        };
        &:hover,
        &:focus {
          background-color: #abdde5;
          cursor: pointer;
        };
        ${listGroupItemActive};
      `;
    }

    return css`
      color: #0c5460;
      background-color: #bee5eb;
      ${listGroupItemActive};
    `;
  }

  return '';
};

const listGroupItemWarning = (props) => {
  if (props.warning) {
    if (props.action) {
      return css`
        color: #856404;
        background-color: #ffeeba;
        & > a:hover,
        & > a:focus {
          color: #856404;
          background-color: #ffe8a1;
        };
        &:hover,
        &:focus {
          background-color: #ffe8a1;
          cursor: pointer;
        };
        ${listGroupItemActive};
      `;
    }

    return css`
      color: #856404;
      background-color: #ffeeba;
      ${listGroupItemActive};
    `;
  }

  return '';
};

const listGroupItemDanger = (props) => {
  if (props.danger) {
    if (props.action) {
      return css`
        color: #721c24;
        background-color: #f5c6cb;
        & > a:hover,
        & > a:focus {
          color: #721c24;
          background-color: #f1b0b7;
        };
        &:hover,
        &:focus {
          background-color: #f1b0b7;
          cursor: pointer;
        };
        ${listGroupItemActive};
      `;
    }

    return css`
      color: #721c24;
      background-color: #f5c6cb;
      ${listGroupItemActive};
    `;
  }

  return '';
};

const listGroupItemLight = (props) => {
  if (props.light) {
    if (props.action) {
      return css`
        color: #818182;
        background-color: #fdfdfe;
        & > a:hover,
        & > a:focus {
          color: #818182;
          background-color: #ececf6;
        };
        &:hover,
        &:focus {
          background-color: #ececf6;
          cursor: pointer;
        };
        ${listGroupItemActive};
      `;
    }

    return css`
      color: #818182;
      background-color: #fdfdfe;
      ${listGroupItemActive};
    `;
  }

  return '';
};

const listGroupItemDark = (props) => {
  if (props.dark) {
    if (props.action) {
      return css`
        color: #1b1e21;
        background-color: #c6c8ca;
        & > a:hover,
        & > a:focus {
          color: #1b1e21;
          background-color: #b9bbbe;
        };
        &:hover,
        &:focus {
          background-color: #b9bbbe;
          cursor: pointer;
        };
        ${listGroupItemActive};
      `;
    }

    return css`
      color: #1b1e21;
      background-color: #c6c8ca;
      ${listGroupItemActive};
    `;
  }

  return '';
};

const listGroupItemDisabled = (props) => (
  props.disabled &&
  css`
    color: #6c757d;
    background-color: #fff;
  `
);

const listGroupItemAction = (props) => {
  if (props.action) {
    if (props.active) {
      return css`
        & > a {
          color: #fff;
        };
        & > a:hover,
        & > a:focus {
          color: #fff;
        };
        &:hover,
        &:focus {
          background-color: #007bff;
          cursor: pointer;
        };
      `;
    }

    return css`
      & > a {
        color: #495057;
      };
      & > a:hover,
      & > a:focus {
        color: #495057;
      };
      &:hover,
      &:focus {
        background-color: #f8f9fa;
        cursor: pointer;
      };
    `;
  }

  return '';
};

export const ListGroupItem = styled.li`
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  &:first-child {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  };
  &:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  };
  & > a:hover, 
  & > a:focus {
    z-index: 1;
    text-decoration: none;
  };
  ${listGroupItemAction};
  ${listGroupItemDisabled};
  ${listGroupItemActive};
  ${listGroupItemPrimary};
  ${listGroupItemSecondary};
  ${listGroupItemSuccess};
  ${listGroupItemInfo};
  ${listGroupItemWarning};
  ${listGroupItemDanger};
  ${listGroupItemLight};
  ${listGroupItemDark};
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
