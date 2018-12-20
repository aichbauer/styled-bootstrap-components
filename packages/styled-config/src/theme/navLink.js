import { colors } from "./colors";
import { utils } from "./utils";

const navLink =  {
  colors: {
    default: {
      colorDisabled: colors.gray,
      colorDisabledHoverFocus: colors.gray,
      colorTabsActive: colors.gray700,
      colorTabsActiveHoverFocus: colors.gray700,
      colorPillsActive: colors.white,
      colorPillsActiveHoverFocus: colors.white,
      color: colors.blue,
      colorHoverFocus: colors.blueHoverFocusA,
      backgroundColorPillsActive: colors.blue,
      borderColorTabsActive: `${colors.gray200} ${colors.gray200} ${colors.white}`,
      borderColorTabsHoverFocus: `${colors.gray200} ${colors.gray200} ${colors.gray300}`,
      borderColorTabsDisabled: 'transparent',
      borderColorPillsActive: colors.blue,
      borderColor: 'transparent',
    },
    light: {
      colorDisabled: colors.gray,
      colorDisabledHoverFocus: colors.gray,
      colorTabsActive: colors.gray700,
      colorTabsActiveHoverFocus: colors.gray700,
      colorPillsActive: colors.white,
      colorPillsActiveHoverFocus: colors.white,
      color: colors.blue,
      colorHoverFocus: colors.blueHoverFocusA,
      backgroundColorPillsActive: colors.blue,
      borderColorTabsActive: `${colors.gray200} ${colors.gray200} ${colors.white}`,
      borderColorTabsHoverFocus: `${colors.gray200} ${colors.gray200} ${colors.gray300}`,
      borderColorTabsDisabled: 'transparent',
      borderColorPillsActive: colors.blue,
      borderColor: 'transparent',
    },
    dark: {
      colorDisabled: colors.gray,
      colorDisabledHoverFocus: colors.gray,
      colorTabsActive: colors.gray700,
      colorTabsActiveHoverFocus: colors.gray700,
      colorPillsActive: colors.white,
      colorPillsActiveHoverFocus: colors.white,
      color: colors.blue,
      colorHoverFocus: colors.blueHoverFocusA,
      backgroundColorPillsActive: colors.blue,
      borderColorTabsActive: `${colors.gray200} ${colors.gray200} ${colors.white}`,
      borderColorTabsHoverFocus: `${colors.gray200} ${colors.gray200} ${colors.gray300}`,
      borderColorTabsDisabled: 'transparent',
      borderColorPillsActive: colors.blue,
      borderColor: 'transparent',
    },
  },
  padding: {
    default: '0.5rem',
  },
  borderRadius: utils.borderRadius,
  border: utils.border,
};

export { navLink };
