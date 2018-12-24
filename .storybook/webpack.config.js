const path = require('path');
const cwd = process.cwd();

module.exports = {
  resolve: {
    alias: {
      'styled-components': path.resolve(cwd, 'node_modules', 'styled-components'),
    }
  }
};
