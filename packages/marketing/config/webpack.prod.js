const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const nodePackageJson = require('../package.json');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap',
            },
            shared: nodePackageJson.dependencies,
        }),
    ]
}

module.exports = merge(commonConfig, prodConfig);