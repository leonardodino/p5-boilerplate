const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpackConfig = require('./webpack.config')

const distPath = path.join(__dirname, 'dist')

function clean(obj) {
	for(var propName in obj){
		if (obj[propName] === null || obj[propName] === undefined) {
			delete obj[propName];
		}
	}
	return obj
}

Object.assign(webpackConfig, {
	devserver: undefined,
	devtool: 'source-map',
	output: Object.assign(webpackConfig.output, {
		filename: '[name].[chunkhash].js',
		path: distPath,
	}),
	plugins: webpackConfig.plugins.concat([
		new CleanWebpackPlugin([distPath]),
	]),
})

module.exports = clean(webpackConfig)
