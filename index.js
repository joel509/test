var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

var PORT = 8080;

var server = app.listen(PORT || process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
