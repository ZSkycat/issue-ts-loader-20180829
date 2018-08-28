const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: { index: `./src/index.ts` },
    output: {
        path: path.resolve('./dist'),
        filename: 'script/[name].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.vue', '.js', '.jsx', '.mjs', '.ts', '.tsx'],
        alias: {
            src: path.resolve('./src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: { appendTsSuffixTo: [/(\.vue)$/], compilerOptions: { sourceMap: true } },
                    },
                ],
            },
            {
                test: /\.tsx$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: { appendTsxSuffixTo: [/\.vue$/], compilerOptions: { sourceMap: true } },
                    },
                ],
            },
            {
                test: /\.vue$/,
                use: [{ loader: 'vue-loader', options: { compilerOptions: { preserveWhitespace: false } } }],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlPlugin({
            template: path.resolve('./src/index.html'),
            filename: 'index.html',
            chunks: ['index'],
        }),
    ],
};
