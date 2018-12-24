import { colors } from './colors';
import { utils } from './utils';

const alert = {
  colors: {
    primary: {
      text: colors.blueAlertText,
      background: colors.blueAlertBackground,
      border: colors.blueAlertBorder,
      borderTop: colors.blueAlertBorderTop,
      hover: colors.blueAlertAHoverFocus,
    },
    secondary: {
      text: colors.grayAlertText,
      background: colors.grayAlertBackground,
      border: colors.grayAlertBorder,
      borderTop: colors.grayAlertBorderTop,
      hover: colors.grayAlertAHoverFocus,
    },
    success: {
      text: colors.greenAlertText,
      background: colors.greenAlertBackground,
      border: colors.greenAlertBorder,
      borderTop: colors.greenAlertBorderTop,
      hover: colors.greenAlertAHoverFocus,
    },
    danger: {
      text: colors.redAlertText,
      background: colors.redAlertBackground,
      border: colors.redAlertBorder,
      borderTop: colors.redAlertBorderTop,
      hover: colors.redAlertAHoverFocus,
    },
    warning: {
      text: colors.yellowAlertText,
      background: colors.yellowAlertBackground,
      border: colors.yellowAlertBorder,
      borderTop: colors.yellowAlertBorderTop,
      hover: colors.yellowAlertAHoverFocus,
    },
    info: {
      text: colors.cyanAlertText,
      background: colors.cyanAlertBackground,
      border: colors.cyanAlertBorder,
      borderTop: colors.cyanAlertBorderTop,
      hover: colors.cyanAlertAHoverFocus,
    },
    light: {
      text: colors.gray100AlertText,
      background: colors.gray100AlertBackground,
      border: colors.gray100AlertBorder,
      borderTop: colors.gray100AlertBorderTop,
      hover: colors.gray100AlertAHoverFocus,
    },
    dark: {
      text: colors.gray800AlertText,
      background: colors.gray800AlertBackground,
      border: colors.gray800AlertBorder,
      borderTop: colors.gray800AlertBorderTop,
      hover: colors.gray800AlertAHoverFocus,
    },
    default: {
      text: colors.grayAlertText,
      background: colors.grayAlertBackground,
      border: colors.grayAlertBorder,
      borderTop: colors.grayAlertBorderTop,
      hover: colors.grayAlertAHoverFocus,
    },
  },
  margin: {
    bottom: '1rem',
  },
  padding: {
    default: '0.75rem 1.25rem',
    dismissibleRight: '4rem',
  },
  border: {
    default: '1px solid transparent',
  },
  borderRadius: utils.borderRadius,
  fontWeight: {
    default: '700',
  },
};

export { alert };
