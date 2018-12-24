import { colors } from './colors';
import { utils } from './utils';

const badge = {
  colors: {
    primary: {
      backgroundColor: colors.blue,
      backgroundColorHoverFocus: colors.blueHoverFocus,
      color: colors.white,
      linkColor: colors.white,
    },
    secondary: {
      backgroundColor: colors.gray,
      backgroundColorHoverFocus: colors.grayHoverFocus,
      color: colors.white,
      linkColor: colors.white,
    },
    success: {
      backgroundColor: colors.green,
      backgroundColorHoverFocus: colors.greenHoverFocus,
      color: colors.white,
      linkColor: colors.white,
    },
    danger: {
      backgroundColor: colors.red,
      backgroundColorHoverFocus: colors.redHoverFocus,
      color: colors.white,
      linkColor: colors.white,
    },
    warning: {
      backgroundColor: colors.yellow,
      backgroundColorHoverFocus: colors.yellowHoverFocus,
      color: colors.gray900,
      linkColor: colors.gray900,
    },
    info: {
      backgroundColor: colors.cyan,
      backgroundColorHoverFocus: colors.cyanHoverFocus,
      color: colors.white,
      linkColor: colors.white,
    },
    light: {
      backgroundColor: colors.gray100,
      backgroundColorHoverFocus: colors.gray100HoverFocus,
      color: colors.gray900,
      linkColor: colors.gray900,
    },
    dark: {
      backgroundColor: colors.gray800,
      backgroundColorHoverFocus: colors.gray800HoverFocus,
      color: colors.white,
      linkColor: colors.white,
    },
    default: {
      backgroundColor: colors.gray,
      backgroundColorHoverFocus: colors.grayHoverFocus,
      color: colors.white,
      linkColor: colors.white,
    },
  },
  padding: {
    pill: '0.25rem 0.6rem',
    default: '0.25rem 0.4rem',
  },
  fontWeight: {
    default: '700',
  },
  borderRadius: utils.borderRadius,
};

export { badge };
