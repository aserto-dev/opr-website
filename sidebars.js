module.exports = {
  // do not auto-generates a sidebar from the docs folder structure
  //sidebar: [{type: 'autogenerated', dirName: '.'}],

  // create a sidebar manually
  sidebar: [
    'intro',
    'tutorial',
    {
      type: 'category',
      label: 'Open Policy Registry',
      items: [
        'opcr/create-account',
        'opcr/create-organization',
      ],
    },
    {
      type: 'category',
      label: 'Using the CLI',
      items: [
        'cli/download',
        'cli/login',
        'cli/build',
        'cli/list',
        'cli/tag',
        'cli/push',
        'cli/pull',
        'cli/rm',
        'cli/export',
        'cli/repl',
        'cli/sign',
      ],
    }, 
  ],
}