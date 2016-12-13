import webpack from 'webpack';

module.exports = {
  title: 'novel',
  resolve: true,
  open: true,
  mergeConfig: {
    module: {
      rules: [
        {
          test: /\.styl$/,
          use: [ 'style-loader', 'css-loader', 'stylus-loader' ]
        }
      ],
    },
    plugins: [
      new webpack.NormalModuleReplacementPlugin(/element-ui[\/\\]lib[\/\\]locale[\/\\]lang[\/\\]zh-CN/, 'element-ui/lib/locale/lang/en')
    ]
  }
}
