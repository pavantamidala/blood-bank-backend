const userSchema = require("../models/userSchema")

const validateAadhar = (req,res)=>{
    let aadhar = req.body.data.aadhar
    userSchema.find({},(err,doc)=>{
        console.log('aadhar validation')
        console.log(doc)
        doc.filter((obj)=>{
            return obj.aadhar===aadhar
        })
        if(doc.length){
            res.end(true)
        }else{
            res.end(false)
        }
        // res.end()
    })
}

module.exports = validateAadhar