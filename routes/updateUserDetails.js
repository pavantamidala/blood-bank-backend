const config = require('../config/config')
const userSchema = require('../models/userSchema')
const updateUserDetails = (req, res) => {
    console.log('update')
    console.log(req.body);
    req.body.data = JSON.parse(req.body.data);
    const update = {
      // user: "pavan",
      // title: req.body.title,
      // createdAt: new Date().toLocaleDateString(),
      // content: req.body.content,
      donatedBloodCelss: req.body.data.donatedBloodCelss,
      donatedBlood: req.body.data.donatedBlood,
      gender: req.body.data.gender,
      dob: req.body.data.dob,
      address: req.body.data.address,
      bloodGroup: req.body.data.bloodGroup,
      formatted_address: req.body.data.address.formatted_address,
      phoneNumber:req.body.data.phoneNumber,
      aadhar:req.body.data.aadhar
    };
    // console.log(JSON.parse(req.body.data));
    console.log(req.body.data.id);
    console.log('update')
    console.log(update)
    let doc = userSchema.findOneAndUpdate(
      { _id: req.body.data.id },
      update,
      { new: true },
      (err, doc) => {
        if (err) {
          res.send(config.FAILURE_MESSAGE);
          res.status(config.FAILURE_STATUS);
          res.end();
        }
        console.log(doc)
        res.send(config.EDIT_SUCCESS);
        res.status(config.SUCCESS_STATUS);
        res.end();
      }
    );
  }

  module.exports = updateUserDetails