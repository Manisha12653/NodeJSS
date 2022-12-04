//will return the refernce of express function 
const express = require("express");

//imported the user it will give the collection
const user = require("./user");
const routes=require('./router')
 
//invoking function will return an app
const app = express();
app.use(routes);


//express.json is a middle ware used to parse the incoming requests with json payloads
app.use(express.json());
const port = process.env.PORT || 3000;
// app.get("/", function (req, res) {
//   res.send("loggod in");
// }); 


app.listen(port, function () {
  console.log(`app is listening on port ${port}`);
});
