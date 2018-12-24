const screenSize = (props) => {
  if (props.sm || props.expandSm) {
    return props.theme.screenSize.sm;
  } else if (props.md || props.expandMd) {
    return props.theme.screenSize.md;
  } else if (props.lg || props.expandLg) {
    return props.theme.screenSize.lg;
  } else if (props.xl || props.expandXl) {
    return props.theme.screenSize.xl;
  }

  return '';
};

export { screenSize };
