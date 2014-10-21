var express = require('express'),
	exphbs = require('express-handlebars');

var app = express();

var port = 4040;

//sets app view engine to express-handlebars
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

//tells app to use dev logger--remove when publishing
app.use(express.logger('dev'));

//sets origin point for assets and styles to be based off of
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded() );

app.get('/', function(req, res) {
	res.render('home');
});

app.listen(port);
console.log("app running at 127.0.0.1:" +port);
