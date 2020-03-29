module.exports = {
  origin: 'https://test.miniprogram.com',

  entry: '/test/aaa',

  router: {
    index: [
      '/test/aaa',
      '/test/bbb'
    ]
  },

  redirct: {
    notFound: 'index',
    accessDenied: 'index'
  },

  generate: {
    globalVars: [
      ['TEST_VAR_STRING', '\'miniprogram\''],
      ['TEST_VAR_NUMBER', '123']
    ],
    autoBuildNpm: 'npm'
  },

  app: {
    navigationBarTitleText: 'kbone-vue-project'
  },

  global: {
    rem: true,
    pageStyle: true
  },

  projectConfig: {
    appid: '',
    projectname: 'kbone-vue-project'
  },

  packageConfig: {
    author: 'felixlu'
  }
}