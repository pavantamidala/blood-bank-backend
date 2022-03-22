const userSchema = require("../models/userSchema");
let query = {
  bloodGroup: ["A+", "O+"],
  donatedBlood: [true],
  donatedBloodCelss: "",
  gender: ['Male'],
  // address:{formatted_address:'nellore'},
  formatted_address: "",
  ageGroup: "",
};
function getBaseData(req, res) {
  let data = JSON.parse(req.body.data).payload
  query = data
  query = deleteEmpty(query);
  console.log(query)
  userSchema.find(
    getQueries(query),
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result);
      res.end();
      console.log(result);
    }
  );
}
function deleteEmpty(obj) {
  let keys = Object.keys(obj);
  keys.map((val) => {
    if (!obj[val].length) {
      delete obj[val];
    }
  });
  return obj;
}
function getQueries(query){
  let ans = {}
  let keys = Object.keys(query)
  keys.map((val)=>{
    ans[val] = {
      $in:query[val]
    }
  })
  return ans
}
module.exports = getBaseData;
