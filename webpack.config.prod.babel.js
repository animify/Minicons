import path from 'path';
import MinifyPlugin from 'babel-minify-webpack-plugin';

export default {
    entry: [
        path.resolve(__dirname, 'src'),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'minicons',
        filename: 'minicons.min.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new MinifyPlugin()
    ]
};
