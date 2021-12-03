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

/*app.post ('/create/add', function (req,res,next) {
    console.log("== req.body:", req.body);
    if (req.body && req.body)
    {
      data.push({
       
      });
      fs.writeFile(
        __dirname + '/database.json',
        JSON.stringify(data, null, 2),
        function (err, data) {
          if (err) {
            console.log("  -- err:", err);
            res.status(500).send("Error");
          } else {
            res.status(200).send("Data successfully added.")
          }
        }
      );  
    } else{
    res.status(400).send("interrupt error");
    }
});*/

app.listen(port, function(err) {
    if (err) {
        throw err;
    }
    console.log("== Server listening on port", port);
})