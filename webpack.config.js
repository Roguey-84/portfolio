const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/i,
				include: path.resolve(__dirname, 'src'),
				loader: 'babel-loader',
				options: {
					presets: ['@babel/env', '@babel/react'],
					plugins: ['@babel/plugin-proposal-class-properties']
				}
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	resolve: {
		extensions: ['.jsx', '.js']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html')
		})
	],
}