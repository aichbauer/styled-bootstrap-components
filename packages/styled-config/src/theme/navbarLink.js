import { colors } from './colors'; 
import { utils } from './utils';

const navbarLink = {
  colors: {
    dark: {
      colorDisabled: colors.navbarDarkColorDisabled,
      colorDisabledHoverFocus: colors.navbarDarkColorDisabled,
      colorActive: colors.navbarDarkColorActive,
      colorActiveHoverFocus: colors.navbarDarkColorActive,
      color: colors.navbarDarkColor,
      colorHoverFocus: colors.navbarDarkColorHoverFocus,
    },
    light: {
      colorDisabled: colors.navbarLightColorDisabled,
      colorDisabledHoverFocus: colors.navbarLightColorDisabled,
      colorActive: colors.navbarLightColorActive,
      colorActiveHoverFocus: colors.navbarLightColorActive,
      color: colors.navbarLightColor,
      colorHoverFocus: colors.navbarLightColorHoverFocus,
    },
    default: {
      colorDisabled: colors.navbarLightColorDisabled,
      colorDisabledHoverFocus: colors.navbarLightColorDisabled,
      colorActive: colors.navbarLightColorActive,
      colorActiveHoverFocus: colors.navbarLightColorActive,
      color: colors.navbarLightColor,
      colorHoverFocus: colors.navbarLightColorHoverFocus,
    },
  },
  padding: {
    brandTop: '0.3125rem',
    brandBottom: '0.3125rem',
  },
  fontSize: utils.fontSize,
};

export { navbarLink };
