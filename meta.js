module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      label: 'Project name'
    },
    description: {
      type: 'string',
      required: true,
      label: 'Project description',
      default: 'A Vue.js project'
    },
    author: {
      type: 'string',
      label: 'Author'
    },
    license: {
      type: 'string',
      label: 'License',
      default: 'MIT'
    },
    sass: {
      type: 'confirm',
      message: 'Use Sass?',
      default: false
    },
    sassSyntax: {
      when: 'sass',
      type: 'list',
      message: 'Pick a Sass style',
      choices: [
        {
          name: 'SCSS - Sassy CSS',
          value: 'scss',
          short: 'SCSS',
        },
        {
          name: 'Sass - Original Syntax',
          value: 'sass',
          short: 'Sass',
        }
      ]
    }
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev{{/inPlace}}'
}
