/* eslint-disable import/no-extraneous-dependencies */
const NODE_ENV = process.env.NODE_ENV || 'development'
const webpack = require('webpack')
const path = require('path')
const RemoveWebpackPlugin = require('remove-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const functions = require('postcss-functions')
const precss = require('precss')
const atImport = require('postcss-import')
const easyImport = require('postcss-easy-import')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const postCssModules = require('postcss-modules')
const settings = require('./config.json')
const vars = require('postcss-simple-vars')
const styleVars = require('./src/styles/vars')

const PORT = settings.port || '8080'

const isDevServer = Boolean(process.argv.find(v => v.includes('webpack-dev-server')))

if (isDevServer) {
	console.log('Listening on', PORT)
}

const postCssLoader = [
	'css-loader?modules',
	'&importLoaders=1',
	'&localIdentName=[name]__[local]___[hash:base64:5]',
	'&disableStructuralMinification',
]

const getEntry = () => {
	if (isDevServer) {
		return [
			'babel-polyfill',
			'react-hot-loader/patch',
			`webpack-dev-server/client?http://127.0.0.1:${PORT}`,
			'webpack/hot/only-dev-server',
			'./src/index.jsx',
		]
	}
	return {
		index: './src/index.jsx',
	}
}

const getLoader = (loader, localPath) => (isDevServer
	? `${loader}${localPath}`
	: `${loader}static/${localPath}`)

const config = {
	devtool: 'eval',
	context: __dirname,
	entry: getEntry(),
	output: {
		path: path.join(__dirname, './dist'),
		filename: isDevServer ? 'js/[name].js' : 'static/js/[name].js',
		publicPath: isDevServer ? `http://127.0.0.1:${PORT}/` : '/',
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
		}),
		new HtmlWebpackPlugin({
			template: isDevServer ? './src/index.hot.html' : './src/index.html',
			inject: isDevServer,
		}),
		new webpack.LoaderOptionsPlugin({
			test: /\.p?css$/,
			options: {
				postcss: {
					plugins: [
						postCssModules({
							scopeBehaviour: 'global',
							generateScopedName: '[name]__[local]___[hash:base64:5]',
						}),
						require('postcss-mixins')({
							mixins: require('./src/styles/mixins'),
						}),
						vars({
							variables: styleVars,
						}),
						atImport({
							plugins: [easyImport],
						}),
						require('postcss-assets')({
							loadPaths: ['**'],
						}),
						require('postcss-mq-keyframes'),
						require('postcss-flexbugs-fixes'),
						autoprefixer,
						precss(),
						functions(),
					],
				},
			},
		}),
	],
	resolve: {
		extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
		modules: [
			path.resolve(__dirname, 'node_modules'),
			__dirname,
		],
		alias: {
			'@components': path.join(__dirname, 'src', 'components'),
			'@containers': path.join(__dirname, 'src', 'containers'),
			'@actions': path.join(__dirname, 'src', 'actions'),
			'@reducers': path.join(__dirname, 'src', 'reducers'),
			'@store': path.join(__dirname, 'src', 'store'),
			'@types': path.join(__dirname, 'src', 'types'),
			'@stylevars': path.join(__dirname, 'src', 'styles', 'vars'),
			'@utils': path.join(__dirname, 'src', 'utils'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: isDevServer
					? ['react-hot-loader/webpack', 'babel-loader']
					: ['babel-loader'],
			}, {
				test: /\.p?css$/,
				exclude: /react-images-uploader/,
				use: isDevServer
					? [
						'style-loader?sourceMap',
						postCssLoader.join(''),
						'sass-loader',
						'postcss-loader',
					]
					: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: [
							postCssLoader.join(''),
							'sass-loader',
							'postcss-loader',
						].join('!'),
					}),
			}, {
				test: /react-images-uploader\/styles\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			}, {
				test: /\.png$/,
				loader: getLoader('file-loader?name=', 'images/[hash].[ext]'),
			}, {
				test: /\.jpg$/,
				loader: getLoader('file-loader?name=', 'images/[hash].[ext]'),
			}, {
				test: /\.gif$/,
				loader: getLoader('file-loader?name=', 'images/[hash].[ext]'),
			}, {
				test: /fonts[^.]+\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: getLoader('file-loader?name=', 'fonts/[hash].[ext]'),
			}, {
				test: /\.svg$/,
				loader: getLoader('file-loader?name=', 'images/[hash].[ext]'),
			},
		],
	},
}

if (!isDevServer) {
	config.plugins = [
		new RemoveWebpackPlugin('./dist', 'hide'),
		new ExtractTextPlugin({ filename: 'static/css/styles.css', ignoreOrder: true }),
	].concat(config.plugins)
}

if (isDevServer) {
	config.plugins.unshift(new webpack.NamedModulesPlugin());
	config.plugins.unshift(new webpack.HotModuleReplacementPlugin());

	config.devServer = {
		contentBase: path.resolve('./dist'),
		hot: true,
		host: '0.0.0.0',
		port: PORT,
		// Need historyApiFallback to be able to refresh on dynamic route
		historyApiFallback: { disableDotRule: true },
		compress: true,
	}

	config.watch = true
}

if (NODE_ENV === 'production' && !isDevServer) {
	postCssLoader.splice(1, 1) // drop human readable names

	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true,
				unsafe: true,
			},
		})
	)
}

module.exports = config
