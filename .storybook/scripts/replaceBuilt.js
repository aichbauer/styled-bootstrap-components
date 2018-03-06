const path = require('path');
const readDirNames = require('read-dir-names');
const fs = require('fs-extra');

const itemsToReplace = [
  {
    actualValue: 'styled-alert-component',
    replaceValue: '../../../styled-alert-component/src/',
  },
  {
    actualValue: 'styled-badge-component',
    replaceValue: '../../../styled-badge-component/src/',
  },
  {
    actualValue: 'styled-base-components',
    replaceValue: '../../../styled-base-components/src/',
  },
  {
    actualValue: 'styled-breadcrumb-component',
    replaceValue: '../../../styled-breadcrumb-component/src/',
  },
  {
    actualValue: 'styled-button-component',
    replaceValue: '../../../styled-button-component/src/',
  },
  {
    actualValue: 'styled-card-component',
    replaceValue: '../../../styled-card-component/src/',
  },
  {
    actualValue: 'styled-config',
    replaceValue: '../../../styled-config/src/',
  },
  {
    actualValue: 'styled-container-component',
    replaceValue: '../../../styled-container-component/src/',
  },
  {
    actualValue: 'styled-dropdown-component',
    replaceValue: '../../../styled-dropdown-component/src/',
  },
  {
    actualValue: 'styled-form-component',
    replaceValue: '../../../styled-form-component/src/',
  },
  {
    actualValue: 'styled-grid-component',
    replaceValue: '../../../styled-grid-component/src/',
  },
  {
    actualValue: 'styled-jumbotron-component',
    replaceValue: '../../../styled-jumbotron-component/src/',
  },
  {
    actualValue: 'styled-listgroup-component',
    replaceValue: '../../../styled-listgroup-component/src/',
  },
  {
    actualValue: 'styled-modal-component',
    replaceValue: '../../../styled-modal-component/src/',
  },
  {
    actualValue: 'styled-nav-component',
    replaceValue: '../../../styled-nav-component/src/',
  },
  {
    actualValue: 'styled-navbar-component',
    replaceValue: '../../../styled-navbar-component/src/',
  },
];

const replacePackagesToReleativePath = () => {
  const cwd = process.cwd();
  const myPath = path.join(cwd, 'packages');
  const dirs = readDirNames(myPath);

  dirs.forEach((dir) => {
    try {
      const files = fs.readdirSync(path.join(myPath, dir, 'src', 'components'));
      console.log(dir);

      files.forEach((file) => {
        const fileContent = fs.readFileSync(path.join(myPath, dir, 'src', 'components', file), 'utf-8');

        let replacedFileConent = fileContent;

        itemsToReplace.forEach((item) => {
          replacedFileConent = replacedFileConent.replace(item.actualValue, item.replaceValue);
        });

        fs.writeFileSync(path.join(myPath, dir, 'src', 'components', file), replacedFileConent, 'utf-8');
      });
    } catch (err) {
      console.log(`SKIP ${dir} --->>> no 'components' directory`);
    }
  });
};

replacePackagesToReleativePath();
