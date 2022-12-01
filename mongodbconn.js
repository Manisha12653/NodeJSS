const mongoose = require("mongoose");
//connection
mongoose 
  .connect("mongodb://127.0.0.1:27017/myfirstapp")
  .then(function () {
    console.log("connnected to db"); 
  })
  .catch(function (e) {
    console.log(`not connected error is ${e}`);
  });

//defining the schema
//schema level validation --data validation or data santization
module.exports = mongoose;
