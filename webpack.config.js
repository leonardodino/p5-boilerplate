const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const ScriptExtHtmlPlugin = require('script-ext-html-webpack-plugin')
const WebpackMd5Hash = require('webpack-md5-hash')

const srcDir = path.join(__dirname, 'src')
const appHtmlTitle = 'Webpack Boilerplate'
const PORT = parseInt(process.env.PORT || 5000)

module.exports = {
	devtool: 'eval-source-map',
	entry: {
		app: path.join(srcDir, 'js', 'app'),
	},
	output: {
		filename: '[name].[hash].js',
		chunkFilename: '[name].[chunkhash].js',
	},
	devServer: {
		inline: true,
		hot: true,
		port: PORT,
		stats: 'minimal',
		overlay: {
			warnings: true,
			errors: true
		},
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['env'],
				},
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader'
			},
		],
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: ({ resource }) => /node_modules/.test(resource),
		}),
		new webpack.optimize.CommonsChunkPlugin('manifest'),
		new CopyPlugin([
			{from: path.join(srcDir, 'assets'), to: 'assets'},
		]),
		new HtmlPlugin({
			template: path.join(srcDir, 'index.pug'),
		}),
		new ScriptExtHtmlPlugin({
			defaultAttribute: 'defer',
			inline: 'manifest',
		}),
		new WebpackMd5Hash(),
	],
}
