//will return the refernce of express function 
const express = require("express");

//imported the user it will give the collection
const user = require("./user");
 
//invoking function will return an app
const app = express();

//express.json is a middle ware used to parse the incoming requests with json payloads
app.use(express.json());
const port = process.env.PORT || 3000;
// app.get("/", function (req, res) {
//   res.send("loggod in");
// }); 

//to post the data into the database
app.post("/userdata", function (req, res) {
  // console.log(req.body);
  const user1 = new user(req.body);
  async function insertdata() {
    try {
      await user1.save();
      res.status(201).send("able to post");
    } catch (e) {
      res.status(400).send(" not able to post");
    }
  }
  insertdata();
  // const user1=new user()
});

//to get the data from the db

app.get("/userdata", async function (req, res) {
  // console.log(req.body);
  try {
    const result = await user.find({}); //it will return the array of documents in a collection user
    res.status(200).send(result);
  } catch (e) {
    res.status(400).send(" not able to get");
  }
});

//to get indiviual data from db

app.get("/userdata/:id", async function (req, res) {
  // console.log(req.body);
  try {
    const _id = req.params.id;
    console.log(_id);
    const result = await user.find({ _id: { $eq: _id } });
    res.status(200).send(result);
  } catch (e) {
    res.status(400).send(" not able to get");
  }
});

//to handle delete request

app.delete("/userData/:name", async function (req, res) {
  const result = await user.deleteOne({ name: { $eq: req.params.name } });
  res.status(200).send(result);
});
app.listen(port, function () {
  console.log(`app is listening on port ${port}`);
});
