import path from 'path';

export default {
    entry: [
        path.resolve(__dirname, 'src'),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'minicons',
        filename: 'minicons.js'
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
};
