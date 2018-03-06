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
import { Button as Btn } from 'styled-base-components';
import { screenSize } from 'styled-config';

const buttonDisabled = (props) => (
  props.disabled
    ? css`
      opacity: 0.65;
    `
    : css`
      cursor: pointer;
    `
);

const buttonActive = (props) => (
  props.active &&
  css`
    background-image: none;
  `
);

const buttonPrimaryFull = (props) => {
  if (props.disabled) {
    return css`
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
      &:hover {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
      };
      &:focus {
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
      };
    `;
  }

  return css`
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    &:hover {
      color: #fff;
      background-color: #0069d9;
      border-color: #0062cc;
    };
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
    };
  `;
};

const buttonPrimaryOutline = (props) => {
  if (props.disabled) {
    return css`
      color: #007bff;
      background-color: transparent;
      background-image: none;
      border-color: #007bff;
      &:hover {
        color: #007bff;
        background-color: transparent;
        background-image: none;
        border-color: #007bff;
      };
      &:focus {
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
      };
    `;
  }

  return css`
    color: #007bff;
    background-color: transparent;
    background-image: none;
    border-color: #007bff;
    &:hover {
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
    };
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
    };
  `;
};

const buttonPrimaryActive = () => (
  css`
    color: #fff;
    background-color: #0062cc;
    border-color: #005cbf;
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
    };
    &:hover {
      color: #fff;
      background-color: #0062cc;
      border-color: #005cbf;
    };
  `
);

const buttonPrimary = (props) => {
  if (props.primary) {
    if (props.active) {
      return buttonPrimaryActive(props);
    } else if (props.outline) {
      return buttonPrimaryOutline(props);
    }

    return buttonPrimaryFull(props);
  }

  return '';
};

const buttonSecondaryFull = (props) => {
  if (props.disabled) {
    return css`
      color: #fff;
      background-color: #6c757d;
      border-color: #6c757d;
      &:hover {
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
      };
      &:focus {
        box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
      };
    `;
  }

  return css`
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    &:hover {
      color: #fff;
      background-color: #5a6268;
      border-color: #545b62;
    };
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
    };
  `;
};

const buttonSecondaryOutline = (props) => {
  if (props.disabled) {
    return css`
      color: #6c757d;
      background-color: transparent;
      background-image: none;
      border-color: #6c757d;
      &:hover {
        color: #6c757d;
        background-color: transparent;
        background-image: none;
        border-color: #6c757d;
      };
      &:focus {
        box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
      };
    `;
  }

  return css`
    color: #6c757d;
    background-color: transparent;
    background-image: none;
    border-color: #6c757d;
    &:hover {
      color: #fff;
      background-color: #6c757d;
      border-color: #6c757d;
    };
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
    };
  `;
};

const buttonSecondaryActive = () => (
  css`
    color: #fff;
    background-color: #545b62;
    border-color: #4e555b;
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
    };
    &:hover {
      color: #fff;
      background-color: #545b62;
      border-color: #4e555b;
    };
  `
);

const buttonSecondary = (props) => {
  if (props.secondary) {
    if (props.active) {
      return buttonSecondaryActive(props);
    } else if (props.outline) {
      return buttonSecondaryOutline(props);
    }

    return buttonSecondaryFull(props);
  }

  return '';
};

const buttonSuccessFull = (props) => {
  if (props.disabled) {
    return css`
      color: #fff;
      background-color: #28a745;
      border-color: #28a745;
      &:hover {
        color: #fff;
        background-color: #28a745;
        border-color: #28a745;
      };
      &:focus {
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
      };
    `;
  }

  return css`
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
    &:hover {
      color: #fff;
      background-color: #218838;
      border-color: #1e7e34;
    };
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
    };
  `;
};

const buttonSuccessOutline = (props) => {
  if (props.disabled) {
    return css`
      color: #28a745;
      background-color: transparent;
      background-image: none;
      border-color: #28a745;
      &:hover {
        color: #28a745;
        background-color: transparent;
        background-image: none;
        border-color: #28a745;
      };
      &:focus {
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
      };
    `;
  }

  return css`
    color: #28a745;
    background-color: transparent;
    background-image: none;
    border-color: #28a745;
    &:hover {
      color: #fff;
      background-color: #28a745;
      border-color: #28a745;
    };
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
    };
  `;
};

const buttonSuccessActive = () => (
  css`
    color: #fff;
    background-color: #1e7e34;
    border-color: #1c7430;
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
    };
    &:hover {
      color: #fff;
      background-color: #1e7e34;
      border-color: #1c7430;
    };
  `
);

const buttonSuccess = (props) => {
  if (props.success) {
    if (props.active) {
      return buttonSuccessActive(props);
    } else if (props.outline) {
      return buttonSuccessOutline(props);
    }

    return buttonSuccessFull(props);
  }

  return '';
};

const buttonInfoFull = (props) => {
  if (props.disabled) {
    return css`
      color: #fff;
      background-color: #17a2b8;
      border-color: #17a2b8;
      &:hover {
        color: #fff;
        background-color: #17a2b8;
        border-color: #17a2b8;
      };
      &:focus {
        box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
      };
    `;
  }

  return css`
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8;
    &:hover {
      color: #fff;
      background-color: #138496;
      border-color: #117a8b;
    };
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
    };
  `;
};

const buttonInfoOutline = (props) => {
  if (props.disabled) {
    return css`
      color: #17a2b8;
      background-color: transparent;
      background-image: none;
      border-color: #17a2b8;
      &:hover {
        color: #17a2b8;
        background-color: transparent;
        background-image: none;
        border-color: #17a2b8;
      };
      &:focus {
        box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
      };
    `;
  }

  return css`
    color: #17a2b8;
    background-color: transparent;
    background-image: none;
    border-color: #17a2b8;
    &:hover {
      color: #fff;
      background-color: #17a2b8;
      border-color: #17a2b8;
    };
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
    };
  `;
};

const buttonInfoActive = () => (
  css`
    color: #fff;
    background-color: #117a8b;
    border-color: #10707f;
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
    };
    &:hover {
      color: #fff;
      background-color: #117a8b;
      border-color: #10707f;
    };
  `
);

const buttonInfo = (props) => {
  if (props.info) {
    if (props.active) {
      return buttonInfoActive(props);
    } else if (props.outline) {
      return buttonInfoOutline(props);
    }

    return buttonInfoFull(props);
  }

  return '';
};

const buttonWarningFull = (props) => {
  if (props.disabled) {
    return css`
      color: #212529;
      background-color: #ffc107;
      border-color: #ffc107;
      &:hover {
        color: #212529;
        background-color: #ffc107;
        border-color: #ffc107;
      };
      &:focus {
        box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
      };
    `;
  }

  return css`
    color: #212529;
    background-color: #ffc107;
    border-color: #ffc107;
    &:hover {
      color: #212529;
      background-color: #e0a800;
      border-color: #d39e00;
    };
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
    };
  `;
};

const buttonWarningOutline = (props) => {
  if (props.disabled) {
    return css`
      color: #ffc107;
      background-color: transparent;
      background-image: none;
      border-color: #ffc107;
      &:hover {
        color: #ffc107;
        background-color: transparent;
        background-image: none;
        border-color: #ffc107;
      };
      &:focus {
        box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
      };
    `;
  }

  return css`
    color: #ffc107;
    background-color: transparent;
    background-image: none;
    border-color: #ffc107;
    &:hover {
      color: #212529;
      background-color: #ffc107;
      border-color: #ffc107;
    };
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
    };
  `;
};

const buttonWarningActive = () => (
  css`
    color: #212529;
    background-color: #d39e00;
    border-color: #c69500;
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
    };
    &:hover {
      color: #212529;
      background-color: #d39e00;
      border-color: #c69500;
    };
  `
);

const buttonWarning = (props) => {
  if (props.warning) {
    if (props.active) {
      return buttonWarningActive(props);
    } else if (props.outline) {
      return buttonWarningOutline(props);
    }

    return buttonWarningFull(props);
  }

  return '';
};

const buttonDangerFull = (props) => {
  if (props.disabled) {
    return css`
      color: #fff;
      background-color: #dc3545;
      border-color: #dc3545;
      &:hover {
        color: #fff;
        background-color: #dc3545;
        border-color: #dc3545;
      };
      &:focus {
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
      };
    `;
  }

  return css`
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
    &:hover {
      color: #fff;
      background-color: #c82333;
      border-color: #bd2130;
    };
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
    };
  `;
};

const buttonDangerOutline = (props) => {
  if (props.disabled) {
    return css`
      color: #dc3545;
      background-color: transparent;
      background-image: none;
      border-color: #dc3545;
      &:hover {
        color: #dc3545;
        background-color: transparent;
        background-image: none;
        border-color: #dc3545;
      };
      &:focus {
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
      };
    `;
  }

  return css`
    color: #dc3545;
    background-color: transparent;
    background-image: none;
    border-color: #dc3545;
    &:hover {
      color: #fff;
      background-color: #dc3545;
      border-color: #dc3545
    };
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
    };
  `;
};

const buttonDangerActive = () => (
  css`
    color: #fff;
    background-color: #bd2130;
    border-color: #b21f2d;
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
    };
    &:hover {
      color: #fff;
      background-color: #bd2130;
      border-color: #b21f2d;
    };
  `
);

const buttonDanger = (props) => {
  if (props.danger) {
    if (props.active) {
      return buttonDangerActive(props);
    } else if (props.outline) {
      return buttonDangerOutline(props);
    }

    return buttonDangerFull(props);
  }

  return '';
};

const buttonLightFull = (props) => {
  if (props.disabled) {
    return css`
      color: #212529;
      background-color: #f8f9fa;
      border-color: #f8f9fa;
      &:hover {
        color: #212529;
        background-color: #f8f9fa;
        border-color: #f8f9fa;
      };
      &:focus {
        box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
      };
    `;
  }

  return css`
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    &:hover {
      color: #212529;
      background-color: #e2e6ea;
      border-color: #dae0e5;
    };
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
    };
  `;
};

const buttonLightOutline = (props) => {
  if (props.disabled) {
    return css`
      color: #f8f9fa;
      background-color: transparent;
      background-image: none;
      border-color: #f8f9fa;
      &:hover {
        color: #f8f9fa;
        background-color: transparent;
        background-image: none;
        border-color: #f8f9fa;
      };
      &:focus {
        box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
      };
    `;
  }

  return css`
    color: #f8f9fa;
    background-color: transparent;
    background-image: none;
    border-color: #f8f9fa;
    &:hover {
      color: #212529;
      background-color: #f8f9fa;
      border-color: #f8f9fa;
    };
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
    };
  `;
};

const buttonLightActive = () => (
  css`
    color: #212529;
    background-color: #dae0e5;
    border-color: #d3d9df;
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
    };
    &:hover {
      color: #212529;
      background-color: #dae0e5;
      border-color: #d3d9df;
    };
  `
);

const buttonLight = (props) => {
  if (props.light) {
    if (props.active) {
      return buttonLightActive(props);
    } else if (props.outline) {
      return buttonLightOutline(props);
    }

    return buttonLightFull(props);
  }

  return '';
};

const buttonDarkFull = (props) => {
  if (props.disabled) {
    return css`
      color: #fff;
      background-color: #343a40;
      border-color: #343a40;
      &:hover {
        color: #fff;
        background-color: #343a40;
        border-color: #343a40;
      };
      &:focus {
        box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
      };
    `;
  }

  return css`
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
    &:hover {
      color: #fff;
      background-color: #23272b;
      border-color: #1d2124;
    };
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
    };
  `;
};

const buttonDarkOutline = (props) => {
  if (props.disabled) {
    return css`
      color: #343a40;
      background-color: transparent;
      background-image: none;
      border-color: #343a40;
      &:hover {
        color: #343a40;
        background-color: transparent;
        background-image: none;
        border-color: #343a40;
      };
      &:focus {
        box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
      };
    `;
  }

  return css`
    color: #343a40;
    background-color: transparent;
    background-image: none;
    border-color: #343a40;
    &:hover {
      color: #fff;
      background-color: #343a40;
      border-color: #343a40;
    };
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
    };
  `;
};

const buttonDarkActive = () => (
  css`
    color: #fff;
    background-color: #1d2124;
    border-color: #171a1d;
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
    };
    &:hover {
      color: #fff;
      background-color: #1d2124;
      border-color: #171a1d;
    };
  `
);

const buttonDark = (props) => {
  if (props.dark) {
    if (props.active) {
      return buttonDarkActive(props);
    } else if (props.outline) {
      return buttonDarkOutline(props);
    }

    return buttonDarkFull(props);
  }

  return '';
};

export const buttonSmall = (props) => (
  props.sm &&
  css`
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0.2rem;
  `
);

export const buttonLarge = (props) => (
  props.lg &&
  css`
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
  `
);

const buttonBlock = (props) => (
  props.block &&
  css`
    display: block;
    width: 100%;
    & + & {
      margin-top: 0.5rem;
    };
  `
);

const buttonDropdownToggle = (props) => (
  props.dropdownToggle &&
  css`
    &::after {
      display: inline-block;
      width: 0;
      height: 0;
      margin-left: 0.255em;
      vertical-align: 0.255em;
      content: "";
      border-top: 0.3em solid;
      border-right: 0.3em solid transparent;
      border-bottom: 0;
      border-left: 0.3em solid transparent;
    };
    &:empty::after {
      margin-left: 0;
    };
  `
);

const buttonSplit = (props) => {
  if (props.split) {
    if (props.sm) {
      return css`
        padding: 0;
        padding-right: 0.375rem;
        padding-left: 0.375rem;
        &::after {
          margin-left: 0;
        };
      `;
    } else if (props.lg) {
      return css`
        padding: 0;
        padding-right: 0.75rem;
        padding-left: 0.75rem;
        &::after {
          margin-left: 0;
        };
      `;
    }

    return css`
      padding: 0;
      padding-right: 0.5625rem;
      padding-left: 0.5625rem;
      &::after {
        margin-left: 0;
      };
    `;
  }

  return '';
};

const buttonToggler = (props) => {
  if (props.dark) {
    return css`
      color: rgba(255, 255, 255, 0.5);
      border-color: rgba(255, 255, 255, 0.1);
      &:hover, &:focus {
        color: rgba(255, 255, 255, 0.5);
        border-color: rgba(255, 255, 255, 0.1); 
      };
    `;
  } else if (props.light) {
    return css`
      color: rgba(0, 0, 0, 0.5);
      border-color: rgba(0, 0, 0, 0.1);
      &:hover, &:focus {
        color: rgba(0, 0, 0, 0.5);
        border-color: rgba(0, 0, 0, 0.1);
      };
    `;
  }

  return '';
};

const buttonToggleCollapse = (props) => {
  let thisScreenSize = '';

  if (props.expandSm) {
    thisScreenSize = screenSize.sm;
  } else if (props.expandMd) {
    thisScreenSize = screenSize.md;
  } else if (props.expandLg) {
    thisScreenSize = screenSize.lg;
  } else if (props.expandXl) {
    thisScreenSize = screenSize.xl;
  }

  if (
    (
      props.expandSm ||
      props.expandMd ||
      props.expandLg ||
      props.expandXl
    ) &&
    props.toggleCollapse
  ) {
    return css`
      display: none;
      @media (max-width: ${thisScreenSize}) {
        display: block;
        font-size: 1.25rem;
        ${buttonToggler};
      };
    `;
  }

  return '';
};

export const Button = styled(Btn)`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover, &:focus {
    text-decoration: none;
  };
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  };
  ${buttonActive};
  ${buttonPrimary};
  ${buttonSecondary};
  ${buttonSuccess};
  ${buttonInfo};
  ${buttonWarning};
  ${buttonDanger};
  ${buttonLight};
  ${buttonDark};
  ${buttonSmall};
  ${buttonLarge};
  ${buttonBlock};
  ${buttonDisabled};
  ${buttonDropdownToggle};
  ${buttonSplit};
  ${buttonToggleCollapse};
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
