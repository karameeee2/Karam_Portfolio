const { merge } = require('webpack-merge');
const common = require('./webpack.config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        port: 3000,
        historyApiFallback: true, // history api 를 사용하는 SPA 개발 시 설정한다. 404가 발생하면 index.html 로 리턴함
        hot: true,
        compress: true,
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': 'development'
        })
    ],
})