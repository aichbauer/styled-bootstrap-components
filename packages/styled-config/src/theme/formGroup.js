const formGroup = {
  margin: {
    inlineBottom: '0',
    nombNoRow: '0',
    nombRowRight: '-5px',
    nombRowLeft: '-5px',
    nombRowDivLabelBottom: '0',
    nombRowBottom: '0',
    rowRight: '-5px',
    rowLeft: '-5px',
    rowDivLabel: '0',
    bottom: '1rem',
  },
  padding: {
    labelTopLg: 'calc(0.5rem + 1px)',
    labelBottomLg: 'calc(0.5rem + 1px)',
    inputRightLg: '0',
    inputLeftLg: '0',
    inputLg: '0.5rem 1rem',
    labelTopSm: 'calc(0.25rem + 1px)',
    labelBottomSm: 'calc(0.25rem + 1px)',
    inputRightSm: '0',
    inputLeftSm: '0',
    inputSm: '0.25rem 0.5rem',
  },
  borderRadius: (get) => get('globals', 'borderRadius'),
  fontSize: (get) => get('globals', 'fontSize'),
};

export { formGroup };
