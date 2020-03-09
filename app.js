var app = require('express')();

app.get('/', function (req, res) {
	res.send('Hello World!');
});


app.get('/about', function (req, res) {
	res.send('Learn more about us here.');
});



app.get('/contact-me', function (req, res) {
	res.send('Contact us through these addresses.');
});

app.listen(8080);