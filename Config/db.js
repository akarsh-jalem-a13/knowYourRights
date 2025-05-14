const mongoose = require("mongoose");
const Db_link = process.env.DB;

const Db = mongoose.connect(Db_link)
  .then(() => {
    console.log("Connection to db Successful");
  })
  .catch(() => {
    console.log("failed to connect to Db");
  });
