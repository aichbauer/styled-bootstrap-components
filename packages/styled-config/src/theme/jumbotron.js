import { colors } from './colors';
import { utils } from './utils';

const jumbotron = {
  colors: {
    default: {
      backgroundColor: colors.gray200,
    },
  },
  padding: {
    sm: '4rem 2rem',
    fluidRight: '0',
    fluidLeft: '0',
    pill: '2rem 8rem',
    lgPill: '4rem 8rem',
    smPill: '4rem 4rem',
    default: '2rem 1rem',
  },
  borderRadius: utils.borderRadius,
};

export { jumbotron };
