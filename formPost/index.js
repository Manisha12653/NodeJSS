var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use("/static", express.static("public"));

app.get("/index1.html", function (req, res) {
  res.sendFile(__dirname + "/" + "index1.html");
});

app.post("/process_post1", urlencodedParser, function (req, res) {
  user_input = {
    email: req.body.email,
    occupation: req.body.occupation,
  };
  console.log(user_input);
  res.end(JSON.stringify(user_input));
});
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
