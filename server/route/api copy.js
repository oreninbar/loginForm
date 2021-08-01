const axios = require("axios");
const express = require("express");

router = express.Router();
const User = require("../../model/RegisteredUser");

/**
 * gets all the registerd users
 */
router.get("/registered_users", async (req, res) => {
  await User.find({}, (err, users) => {
    if (err) {
      res.send(err);
    } else res.send(users);
  });
});

/**
 * delete all the  registered users
 */
router.delete("/delete_all", async (req, res) => {
  try {
    await User.deleteMany().then(() => {
      res.send("Delete all the users");
    });
  } catch (error) {
    console.log(error);
  } finally {
    res.end();
  }
});

/**
 * Adds user to the database
 */
router.post("/register_user", async (req, res) => {
  let user = new User(req.body);
  try {
    await user.save().then(() => {
      res.send("made the save to the DB");
    });
  } catch (error) {
    console.log(error);
  } finally {
    res.end();
  }
});

/**
 * finds user by email and return the object of the user
 */
router.get("/user/:email", async (req, res) => {
  let { email } = req.params;
  await User.find({ useremail: `${email}` }, (err, user) => {
    if (err) {
      console.log(err);
      console.log('Didnt succeed the req')
      res.send(err);
    } else {
      console.log('succeed the req')
 
      res.send(user[0]);
    }
  });
});

/**
 * finds user by email and updates the user password
 */
router.put("/update_user", async (req, res) => {
  let { useremail, userpassword } = req.body;

  try {
    await User.findOneAndUpdate(
      { useremail: `${useremail}` },
      { userpassword: `${userpassword}` }
    ).then((err, user) => {
      if (err) res.send(err);
      else {
        res.send("made the update");
      }
    });
  } catch (error) {
    console.log(error);
  }
});

/**
 *delete user by email
 */
router.delete("/delete_user/:email", async (req, res) => {
  let { email } = req.params;
  console.log(req.params);
  try {
    await User.findOneAndDelete({ useremail: `${email}` }, (err, result) => {
      if (err) {
        res.send(err);
      } else res.send(result);
    });
  } catch (error) {
    console.log(error);
  } finally {
    res.end();
  }
});

module.exports = router;
