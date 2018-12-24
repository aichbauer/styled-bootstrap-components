import { colors } from './colors';
import { utils } from './utils';

const formControl = {
  colors: {
    default: {
      color: colors.gray700,
      background: colors.white,
      border: colors.gray400,
      borderFocus: colors.formControlBorderFocus,
      boxShadowFocus: colors.formControlBoxShadowFocus,
      placeholder: colors.gray,
      backgroundColorDisabledReadonly: colors.gray200,
      borderValid: colors.green,
      formControlBoxShadowValid: colors.formControlBoxShadowValid,
      borderInvalid: colors.red,
      formControlBoxShadowInvalid: colors.formControlBoxShadowInvalid,
    },
  },
  borderRadius: utils.borderRadius,
  border: utils.border,
  boxShadow: {
    default: '0 0 0 0.2rem',
  },
  padding: {
    smRight: '0',
    smLeft: '0',
    lgRight: '0',
    lgLeft: '0',
    smPadding: '0.25rem 0.5rem',
    lgPadding: '0.5rem 1rem',
    defaultPadding: '0.375rem 0.75rem',
  },
  fontSize: {
    sm: '0.875rem',
    lg: '1.25rem',
    default: '1rem',
  },
  height: {
    select: 'calc(2.25rem + 2px)',
    selectLg: 'calc(2.875rem + 2px)',
    selectSm: 'calc(1.8125rem + 2px)',
  },
};

export { formControl };
