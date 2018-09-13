const pathUtil = require('path');
const ngToolsWebpack = require('@ngtools/webpack')

module.exports = {
	entry: {
			 main: './src/main.ts',
			},
	output: {
		filename : '[name].module.js',
		path : pathUtil.join(__dirname, "dist")
	},
   
	module: {
		rules: [
			{
				test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
				use: '@ngtools/webpack',
			},
			{
				test: /\.html$/,
				use: 'raw-loader',
			  }
		]
	},
	plugins: [
		new ngToolsWebpack.AngularCompilerPlugin({
			tsConfigPath: './tsconfig.json',
			entryModule: './src/app/app.module.ts#AppModule'
		})
	]
};



