const listGroup = {
  padding: {
    left: '0',
  },
  margin: {
    bottom: '0',
  },
  border: {
    aLiFlushRight: '0',
    aLiFlushLeft: '0',
    aLiFlushFirstChildTop: '0',
    aLiFlushLastChildBottom: '0',
  },
  borderRadius: (get) => get('globals', 'borderRadius'),
};

export { listGroup };
