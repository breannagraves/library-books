const mongoose = require("mongoose");

const mongoConn = [removed for privacy];

// mongoose.connect(mongoConn, { useNewUrlParser: true, useUnifiedTopology: true })
// const connection = mongoose.connection;
// connection.on("error", console.error.bind(console, "MongoDb connection error"))
// connection.once("open", function () { console.log("connected"); });


const db = mongoose.connect(mongoConn, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));


module.exports = db;

