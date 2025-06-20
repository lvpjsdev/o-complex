const path = require('path');

const buildEslintCommand = (filenames) => [
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`,
  'prettier . --write',
  'eslint --fix',
  'eslint',
];

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '**/*.{json,css,md}': ['prettier . --write'],
};
