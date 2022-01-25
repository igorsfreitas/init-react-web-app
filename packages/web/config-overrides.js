const {
  override,
  addBabelPlugins,
  getBabelLoader
} = require('customize-cra')
const path = require('path')

const get = require('lodash/get')
const set = require('lodash/set')

const webpack = (config) => {
  set(config, 'module.rules[1].oneOf[2]', {
    ...get(config, 'module.rules[1].oneOf[2]', {}),
    include: [
      get(config, 'module.rules[1].oneOf[2].include'),
      path.resolve(__dirname, '../../node_modules/@meta-awesome'),
      path.resolve(__dirname, '../../node_modules/@meta-react'),
      path.resolve(__dirname, '../core')
    ]
  })

  return override(
    (conf) => {
      getBabelLoader(conf).options.sourceType = 'unambiguous'
      return conf
    },
    addBabelPlugins([
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src'
      }
    ]),
    addBabelPlugins([
      '@babel/plugin-proposal-class-properties',
      { loose: true }
    ])
  )(config)
}

module.exports = { webpack }
