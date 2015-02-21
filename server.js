var express = require('express');
var app = express();
var PouchDB = require('pouchdb').defaults({ prefix: './db/'} );
var ecstatic = require('ecstatic');

app.use('/db', require('express-pouchdb')(PouchDB));
app.use(ecstatic('public'));
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});
var stream = new PouchDB('stream');
app.listen(3000);