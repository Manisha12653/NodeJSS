const mongoose = require("./mongodbconn");

const validator = require("validator");
const schema = mongoose.Schema;

const user = new schema({
  name: { type: String, required: true },  
  age: { type: Number, minLength: 2 },
});  

//creating collection with model
//collection userdata
const userdata = mongoose.model("UserData", user); 

//creating documents

async function insertDocuments() {
  const user1 = new userdata({ name: "manisha", age: 11 });
  try {
    await user1.save();
    console.log("saved");
    // module.exports = userdata;
  } catch (e) {
    console.log("not saved to db");
  }
}

// insertDocuments();
module.exports = userdata;
