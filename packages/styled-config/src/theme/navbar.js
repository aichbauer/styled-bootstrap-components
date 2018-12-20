import { colors } from './colors';

const navbar = {
  colors: {
    dark: {
      color: colors.navbarDarkColor,
      borderColor: colors.navbarDarkBorderColor,
      backgroundColor: colors.gray800,
    },
    light: {
      color: colors.navbarLightColor,
      borderColor: colors.navbarLightBorderColor,
      backgroundColor: colors.gray100,
    },
    default: {
      color: colors.navbarLightColor,
      borderColor: colors.navbarLightBorderColor,
      backgroundColor: colors.gray100,
    },
  },
  padding: {
    default: '0.5rem 1rem',
  },
};

export { navbar };
