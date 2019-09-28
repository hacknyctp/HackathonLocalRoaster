const express = require("express");
// const { check, validationResult } = require("express-validator");

const config = require("config");
// const zipcodes = require("zipcodes");
const auth = require("../middleware/requireAuth");
// const fetch = require("node-fetch");
const router = express.Router();
const Roaster = require('../models/Roaster')
//Grab env vars
// const API_KEY = process.env.OWM || config.get("DARK");

//Registering user --> Use a put req ---> CREAT (C)RUD
// @ route      POST api/users
// @desc        Register a user
// @access      Public
router.post(
  "/addRoaster",
  async (req, res) => {
    
    //Pull out the roaster
    const {
      location,
      coffee,
      price
    } = req.body;

    //Check to see if there is a user with that email
    try {
      let roaster = await Roaster.findOne({
        location
      });
      //Go though the MongoDB and see if the email is already registered
      if (roaster) {
        return res.status(400).json({
          msg: "Roaster already exist!"
        });
      }

      //If the roaster is not already in use...
      roaster = new Roaster({
      location,
      coffee,
      price
      });
      //Save it in the db
      await roaster.save();
      //Payload for jwt
    
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
); //Note that "/" here refers to the prefix of "api/users" + "/"

//Get roasters via location.
router.get("/getRoasters", async (req, res) => {
    try {
      // console.log(req.body);
      const { location, price } = req.body; //De-structure the request's data// console.log(id.user);
      console.log(location);

      const roasters = await Roaster.find(location); 
      console.log(roasters)
      res.json(roasters);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }); //Note that "/" here refers to the prefix of "api/users" + "/"
  

module.exports = router;
