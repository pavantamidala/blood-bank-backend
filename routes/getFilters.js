const userSchema = require('../models//userSchema')
const BLOOD_GROUP = "Blood Group";

const BLOOD_CELLS = "Blood Cells";

// export const BLOOD_GROUP = ''

const LAST_3_MONTHS_DONATED = "Last 3 months donated";

const AGE_GROUP = "Age Group";

const GENDER = "Gender";

const LOCATION = "Location";
function getFilters(req, res) {
    let payload = {
    [BLOOD_GROUP]:["O−", "O+", "A−", "A+", "B−", "B+", "AB−", "AB+"],
    [BLOOD_CELLS]:[true,false],
    [LAST_3_MONTHS_DONATED]:[true,false],
    [AGE_GROUP]:[],
    [GENDER]:['Male','Female','Others'],
    [LOCATION]:[]
    }
    userSchema.find({},(err,doc)=>{
        if(err){
            console.log(err)
        }
        console.log('all')
        console.log(doc)
        let addr = doc.map((obj)=>{
            return obj.formatted_address?obj.formatted_address: ''
        }).filter(val=>val!='' )
    payload.Location = addr
    res.json(JSON.stringify(payload))
    res.end()
    })
}

module.exports = getFilters;
