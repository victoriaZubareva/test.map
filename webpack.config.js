const path = require('path');

module.exports = {
    entry: [
        './src/index.js',
    ],
    output: {
        filename: './bundle.js'
    },
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src/js'),
            use: {
                loader: 'babel-loader',
                options: {
                    presets: 'env'
                }
            }
        },
        ]
    },
    plugins: [
    ]
};