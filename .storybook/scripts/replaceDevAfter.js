const path = require('path');
const readDirNames = require('read-dir-names');
const fs = require('fs-extra');

const itemsToReplace = [
  {
    actualValue: '../packages/styled-alert-component',
    replaceValue: 'packages/styled-alert-component',
  },
  {
    actualValue: '../packages/styled-badge-component',
    replaceValue: 'packages/styled-badge-component',
  },
  {
    actualValue: '../packages/styled-base-components',
    replaceValue: 'packages/styled-base-components',
  },
  {
    actualValue: '../packages/styled-breadcrumb-component',
    replaceValue: 'packages/styled-breadcrumb-component',
  },
  {
    actualValue: '../packages/styled-button-component',
    replaceValue: 'packages/styled-button-component',
  },
  {
    actualValue: '../packages/styled-card-component',
    replaceValue: 'packages/styled-card-component',
  },
  {
    actualValue: '../packages/styled-config',
    replaceValue: 'packages/styled-config',
  },
  {
    actualValue: '../packages/styled-container-component',
    replaceValue: 'packages/styled-container-component',
  },
  {
    actualValue: '../packages/styled-dropdown-component',
    replaceValue: 'packages/styled-dropdown-component',
  },
  {
    actualValue: '../packages/styled-form-component',
    replaceValue: 'packages/styled-form-component',
  },
  {
    actualValue: '../packages/styled-grid-component',
    replaceValue: 'packages/styled-grid-component',
  },
  {
    actualValue: '../packages/styled-jumbotron-component',
    replaceValue: 'packages/styled-jumbotron-component',
  },
  {
    actualValue: '../packages/styled-listgroup-component',
    replaceValue: 'packages/styled-listgroup-component',
  },
  {
    actualValue: '../packages/styled-modal-component',
    replaceValue: 'packages/styled-modal-component',
  },
  {
    actualValue: '../packages/styled-nav-component',
    replaceValue: 'packages/styled-nav-component',
  },
  {
    actualValue: '../packages/styled-navbar-component',
    replaceValue: 'packages/styled-navbar-component',
  },
];

const replacePackagesAfter = () => {
  const cwd = process.cwd();
  const myPath = path.join(cwd, 'stories');
  const dirs = readDirNames(myPath);

  const config = path.join(myPath, '..', 'config.js');
  const fileContent = fs.readFileSync(config, 'utf-8');

  let replacedFileConent = fileContent;

  itemsToReplace.forEach((item) => {
    const re = new RegExp(item.actualValue, 'g');
    replacedFileConent = replacedFileConent.replace(re, item.replaceValue);
  });

  fs.writeFileSync(config, replacedFileConent, 'utf-8');

  dirs.forEach((dir) => {
    try {
      const index = path.join(myPath, dir, 'index.js');
      const fileContent2 = fs.readFileSync(index, 'utf-8');

      let replacedFileConent2 = fileContent2;

      itemsToReplace.forEach((item) => {
        const re = new RegExp(item.actualValue, 'g');
        replacedFileConent2 = replacedFileConent2.replace(re, item.replaceValue);
      });

      fs.writeFileSync(index, replacedFileConent2, 'utf-8');

      const innerDirs = readDirNames(path.join(myPath, dir));

      innerDirs.forEach((innerDir) => {
        if (innerDir !== 'docs') {
          const files = fs.readdirSync(path.join(myPath, dir, innerDir));

          files.forEach((file) => {
            const fileContent3 = fs.readFileSync(path.join(myPath, dir, innerDir, file), 'utf-8');

            let replacedFileConent3 = fileContent3;

            itemsToReplace.forEach((item) => {
              const re = new RegExp(item.actualValue, 'g');
              replacedFileConent3 = replacedFileConent3.replace(re, item.replaceValue);
            });

            fs.writeFileSync(path.join(myPath, dir, innerDir, file), replacedFileConent3, 'utf-8');
          });
        }
      });
    } catch (err) {
      console.log(err);
    }
  });
};

replacePackagesAfter();

