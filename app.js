var express = require('express')
var app = express()
var path = require('path')

var html_dir = path.join(__dirname, 'html')

// serving static files
app.use(express.static('build'))

// root URL and home page
app.get('/', function (req, res) {
  res.send('Hello World, this is the home page!')
})

// temperature converter
app.get('/temperature_converter', function(req, res) {
  res.sendFile(html_dir + '/temperature_converter.html')
})

// Error 404
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
