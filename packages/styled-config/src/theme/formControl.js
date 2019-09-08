const formControl = {
  colors: {
    default: {
      color: (get) => get('colorScheme', 'dark'),
      background: (get) => get('colorScheme', 'white'),
      border: (get) => get('colorScheme', 'darkLighter'),
      borderFocus: (get) => get('colorScheme', 'darkLight'),
      boxShadowFocus: (get) => get('colorScheme', 'darkerBoxShadow'),
      placeholder: (get) => get('colorScheme', 'secondary'),
      backgroundColorDisabledReadonly: (get) => get('colorScheme', 'whiteDark'),
      borderValid: (get) => get('colorScheme', 'success'),
      formControlBoxShadowValid: (get) => get('colorScheme', 'successBoxShadow'),
      borderInvalid: (get) => get('colorScheme', 'danger'),
      formControlBoxShadowInvalid: (get) => get('colorScheme', 'dangerBoxShadow'),
    },
  },
  borderRadius: (get) => get('globals', 'borderRadius'),
  border: (get) => get('globals', 'border'),
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
