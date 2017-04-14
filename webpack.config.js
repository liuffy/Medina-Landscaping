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
                loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
        }]
	    
	  },
	  devtool: 'source-maps'
	};


