module.exports = {
    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react',
                            //'@babel/plugin-syntax-dynamic-import',
                            '@babel/preset-env'
                        ]
                    }
                }
            }
        ]
    }
};