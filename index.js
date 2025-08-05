var express = require('express');
var app = express();
const logger = require('heroku-logger');

app.set('port', (process.env.PORT || 5000));

// log each request in a format suitable for Heroku's logging system
app.use((req, res, next) => {
  logger.info('request', { method: req.method, path: req.originalUrl });
  next();
});

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// serve static assets
app.use(express.static(__dirname + '/public'));

// No explicit route for '/' so that express.static can serve index.html

app.listen(app.get('port'), function() {
  logger.info('Node app is running', { port: app.get('port') });
});
