const FAILURE_MESSAGE = "failed";

const SUCCESS_MESSAGE = "success";

const SUCCESS_STATUS = 200;

const FAILURE_STATUS = 400;
const EDIT_SUCCESS = "Edited Successfully";
const USER_EXIST = "username already exist";
const EMAIL_TAKEN = "email already taken";
 const BLOOD_GROUP = "Blood Group";

 const BLOOD_CELLS = "Blood Celss";

// export const BLOOD_GROUP = ''

 const LAST_3_MONTHS_DONATED = "Last 3 months donated";

 const AGE_GROUP = "Age Group";

 const GENDER = "Gender";

 const LOCATION = "Location";
 let PAYLOAD_KEYS = {
  LOCATION:LOCATION,
  GENDER:GENDER,
  AGE_GROUP:AGE_GROUP,
  LAST_3_MONTHS_DONATED:LAST_3_MONTHS_DONATED,
  BLOOD_CELLS:BLOOD_CELLS,
  BLOOD_GROUP:BLOOD_GROUP
 }
module.exports = {
  FAILURE_MESSAGE,
  SUCCESS_MESSAGE,
  SUCCESS_STATUS,
  FAILURE_STATUS,
  EDIT_SUCCESS,
  EMAIL_TAKEN,
  USER_EXIST,
PAYLOAD_KEYS
};
