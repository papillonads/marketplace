/* eslint global-require: 0 */

require('@babel/register')({
  extensions: ['.js', '.jsx'],
  ignore: [],
})

require('whatwg-fetch')

require('./clientRenderApp')
