var express = require('express');
app = express();

app.get('/', function (req, res) {

  res.send('Simple app for the Building Applications Laghghghgh sonesh kumarparmar:b!\n');
});

app.listen(8080, function () {
  console.log('Simple app for the Building Applications Lab!');
});

