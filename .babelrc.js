
module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: ['ie >= 11']
        },
        modules: false,
        loose: true
      }
    ]
  ]
}