const cardImageHeader = {
  borderRadius: {
    noRadius: (get) => get('globals', 'borderRadius', 'noRadius'),
    topLeftRight: 'calc(0.25rem - 1px)',
  },
};

export { cardImageHeader };
