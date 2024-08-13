const path = require('path');
const HtmlWebapackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new HtmlWebapackPlugin({
			title: 'Resaturant',
			template: './src/index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.(svg|png)$/i,
				type: 'asset/resource',
			},
			{
				test: /.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};
