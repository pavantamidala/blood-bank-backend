const mongoose = require("mongoose");
require("dotenv").config();

// const URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nx9ra.mongodb.net/notes?retryWrites=true&w=majority`;
const URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.seppx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
async function dataBaseConnection(func) {
  await mongoose
    .connect(String(URL), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true
    })
    .then((res) => {
      // console.dir(res.Model);
      console.log("connected to database");
      func();
    })
    .catch((ero) => {
      console.log("connection error" + ero);
    });
}

module.exports = dataBaseConnection;
