const inputGroup = {
  borderRadius: (get) => get('globals', 'borderRadius'),
  fontSize: (get) => get('globals', 'fontSize'),
  padding: {
    leftLg: '0',
    rightLg: '0',
    lg: '0.5rem 1rem',
    leftSm: '0',
    rightSm: '0',
    sm: '0.25rem 0.5rem',
  },
  margin: {
    bottom: '0',
  },
};

export { inputGroup };
