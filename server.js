const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, 'index.html')
    const publicPath = express.static(path.join(__dirname, 'public'))
    app.use("/images", express.static(__dirname + '/images'));
    app.use("/php", express.static(__dirname + '/php'));
    app.use("/favicons", express.static(__dirname + '/favicons'));
    app.use("/app/assets/javascripts", express.static(__dirname + '/app/assets/javascripts'));
    app.use("/app/assets/img", express.static(__dirname + '/app/assets/img'));
    app.use("/css", express.static(__dirname + '/css'));
    app.use(express.static(path.join(__dirname, 'public')));
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    return app
  }
}