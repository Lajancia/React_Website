const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:"development",
    entry: './src/index.js',
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
            },
            },
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            },
        {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"], // 로더는 한 파일에 여러개가 실행될 때 뒤에서 부터 앞으로 실행된다.
      },
        {
            test: /\.(woff(2)?|ttf|eot|svg|jpg|jpeg|png|glb|gltf)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
            {
                loader: 'file-loader',
                options: {
                name: '[name].[ext]',
                outputPath: 'assets/',
                },
            },
            ],
            },
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use : {
                loader: 'babel-loader',
                options:{
                presets: [
                    "@babel/preset-env", ["@babel/preset-react", {"runtime": "automatic"}]
                ]
                }          
            }
            },
        {
        test: /\.json$/,
        loader: 'file-loader',
        type: 'javascript/auto',
        options: {
          name: '[name].[ext]'
        }
      }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico'
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
  static: path.join(__dirname, "dist"),
  port: 9000
}
};
