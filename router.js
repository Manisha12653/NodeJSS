
const express = require("express");
const router =express.Router();

router.post("/userdata", function (req, res) {
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
  
  router.get("/userdata", async function (req, res) {
    // console.log(req.body);
    try {
      const result = await user.find({}); //it will return the array of documents in a collection user
      res.status(200).send(result);
    } catch (e) {
      res.status(400).send(" not able to get");
    }
  });
  
  //to get indiviual data from db
  
  router.get("/userdata/:id", async function (req, res) {
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
  
  router.delete("/userData/:name", async function (req, res) {
    const result = await user.deleteOne({ name: { $eq: req.params.name } });
    res.status(200).send(result);
  });
 