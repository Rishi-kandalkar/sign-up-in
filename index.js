const express = require("express")
const mongoose = require("mongoose")
const indexRouter = require("./indexRouter")
const bodyParser = require("body-parser");
require("dotenv").config();

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };

const port = process.env.port

const connection = mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB connected")
  }, (err) => {
    console.log("error::", err)
});

const app = express()

app.use("/api", indexRouter);

app.listen(port, (err) => {
    if(!err) console.log(`Express server started on : ${port}`)
});



exports.connection = connection;