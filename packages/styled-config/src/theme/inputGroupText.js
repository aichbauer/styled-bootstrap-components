import { colors } from "./colors";
import { utils } from "./utils";

const inputGroupText = {
  colors: {
    default: {
      color: colors.gray700,
      backgroundColor: colors.gray200,
      borderColor: colors.gray400,
    },
  },
  margin: {
    bottom: '0',
    radioCheckboxTop: '0',
    radioCheckboxRight: '0',
    radioCheckboxBottom: '0.4125rem',
  },
  padding: {
    default: '0.375rem 0.75rem',
  },
  fontWeight: {
    default: '400',
  },
  fontSize: utils.fontSize,
  borderRadius: utils.borderRadius,
  border: utils.border,
};

export { inputGroupText };
