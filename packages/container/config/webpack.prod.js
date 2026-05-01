const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const nodePackageJson = require('../package.json');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    optimization: {
        runtimeChunk: false,
    },
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
            },
            shared: nodePackageJson.dependencies,
        }),
    ]
}

module.exports = merge(commonConfig, prodConfig);