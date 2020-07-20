/* eslint-disable @typescript-eslint/no-var-requires */
const { DefinePlugin } = require('webpack')
const gitRevision = require('git-revision')

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: 'ZhangZisu.CN Proxy Service'
  },
  configureWebpack: {
    plugins: [
      new DefinePlugin({
        GIT_HASH: JSON.stringify(gitRevision('hash')),
        GIT_BRANCH: JSON.stringify(gitRevision('branch')),
        BUILD_DATE: JSON.stringify((new Date()).toLocaleString()),
        GA_ID: JSON.stringify(process.env.GA_ID)
      })
    ]
  }
}
