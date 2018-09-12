// requires
const ngToolsWebpack = require('@ngtools/webpack')
const pathUtil = require('path')

module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-webpack');
	var config = {        
	        webpack : {
	        	aot: function() {
	                return {
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
	              },        
	        },
    };


	grunt.initConfig(config);

  
  // Default task(s).
 grunt.registerTask('default', ['webpack:aot']);

};