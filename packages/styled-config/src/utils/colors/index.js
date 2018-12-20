const colors = (props, accessor) => {
  if (props.primary) {
    return props.theme[accessor].colors.primary;
  } else if (props.secondary) {
    return props.theme[accessor].colors.secondary;
  } else if (props.success) {
    return props.theme[accessor].colors.success;
  } else if (props.danger) {
    return props.theme[accessor].colors.danger;
  } else if (props.warning) {
    return props.theme[accessor].colors.warning;
  } else if (props.info) {
    return props.theme[accessor].colors.info;
  } else if (props.light) {
    return props.theme[accessor].colors.light;
  } else if (props.dark) {
    return props.theme[accessor].colors.dark;
  }

  return props.theme[accessor].colors.default;
};

export { colors };
