const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const nodePackageJson = require('../package.json');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const path = process.env.ENV_PATH;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${path}/marketing/remoteEntry.js`,
            },
            shared: nodePackageJson.dependencies,
        }),
    ]
}

module.exports = merge(commonConfig, prodConfig);