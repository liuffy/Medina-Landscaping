const path = require('path');


	module.exports = {
	  context: __dirname,
	  entry: './frontend/medina.jsx',
	  output: {
	    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
	    filename: 'bundle.js'
	  },
	  resolve: {
	    extensions: ['.js', '.jsx', '.scss']
	  },
	  module: {
	    loaders: [
	      {
	        test: /\.jsx?$/,
	        exclude: /(node_modules|bower_components)/,
	        loader: 'babel-loader',
	        query: {
	          presets: ['react', 'es2015']
	        }
	      },
	      {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
	    
	  },
	  devtool: 'source-maps'
	};


