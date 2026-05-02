const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const nodePackageJson = require('../package.json');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const prodConfig = {
    optimization: {
        runtimeChunk: false,
    },
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/auth/latest/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'auth',
            filename: 'remoteEntry.js',
            exposes: {
                './AuthApp': './src/bootstrap',
            },
            shared: nodePackageJson.dependencies,
        }),
    ]
}

module.exports = merge(commonConfig, prodConfig);