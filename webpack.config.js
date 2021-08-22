const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/frame.ts',
    output: {
        library: 'Frame',
        libraryTarget: 'umd',
        libraryExport: 'default',
        path: path.join(__dirname, '/dist/'),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,  
            use: "ts-loader"
        }]
    },
    target: false,
    resolve: {
        extensions: ['.ts', '.js']
    },
    externals: {
        "inversify": {
            commonjs: "inversify",
            commonjs2: "inversify",
            amd: "inversify",
            root: "Inversify"
        }
    }
}; 