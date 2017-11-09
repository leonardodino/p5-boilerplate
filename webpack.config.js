const CopyWebpackPlugin = require('copy-webpack-plugin')

const isDev = !process.env.WEBPACK_COMPILE
const devServer = isDev ? {inline: true, hot: true, port: 3333} : undefined

module.exports = {
	devtool: 'inline-sourcemap',
	entry: __dirname + '/src/js/app.js',
	output: {
		path: __dirname + '/dist/',
		publicPath: '/',
		filename: 'js/app.js'
	},
	devServer: devServer,
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['env']
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			{ from: 'src/index.html', to: 'index.html' },
			{ from: 'src/assets', to: 'assets' }
		]),
	]
}
