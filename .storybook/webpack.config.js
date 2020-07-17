const path = require('path')
const DotEnvPlugin = require('dotenv-webpack')

module.exports = ({ config, mode }) => {
  const fileLoaderRuleSVG = config.module.rules.find((rule) => rule.test.test && rule.test.test('.svg'))
  fileLoaderRuleSVG.exclude = /\.svg$/

  const rules = config.module.rules
  const plugins = config.plugins

  rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          sourceMap: true,
          modules: {
            localIdentName: '[name]_[local]_[hash:base64:5]',
          },
        },
      },
      {
        loader: 'sass-loader',
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          plugins: () => [require('postcss-preset-env')()],
          parser: 'postcss-scss',
        },
      },
    ],
  })

  rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })

  plugins.push(
    new DotEnvPlugin({
      path: path.resolve(__dirname, '../packages/core/.env.develop'),
    }),
  )

  return config
}
