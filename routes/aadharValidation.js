const userSchema = require("../models/userSchema")

const validateAadhar = (req,res)=>{
    let aadhar = JSON.parse(req.body.data).aadhar
    
    userSchema.find({},(err,doc)=>{
        console.log('aadhar validation')
        console.log(doc)
        let check = doc.filter((obj)=>{
            return obj.aadhar===aadhar
        })
        // console.log(aadhar)
        // console.log(check)
        if(check.length){
            res.end("true")
        }else{
            res.end("false")
        }
        // res.end()
    })
}

module.exports = validateAadhar