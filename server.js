var express = require('express')
var exphbs = require('express-handlebars')


var port = process.env.PORT || 8000;
var app = express();

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', function (req, res, next) {
    res.status(200).sendFile(__dirname + '/public/home.html')
})

app.get('/about', function (res, req, next) {
    res.status(200).sendFile(__dirname + '/public/about.html')
})

app.get('/book', function (req, res, next) {
    res.status(200).sendFile(__dirname + '/public/barber.html')
})

app.get('*', function (req, res, next) {
    res.status(400).sendFile(__dirname + '/public/404.html')
})



app.listen(port, function(err) {
    if (err) {
        throw err;
    }
    console.log("== Server listening on port", port);
})