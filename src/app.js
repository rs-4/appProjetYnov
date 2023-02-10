const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const apiRouter = require('./routes');
const errorHandler = require('./middlewares/errorHandling');
app.use(bodyParser.json())


mongoose.connect(
  `mongodb+srv://rayan:rayan@cluster0.vy6bl8r.mongodb.net/apiPROJET`, 
).then(() => {
  console.log("successfully connect to database")
}).catch(err=>console.log(err))

app.use("/apiProjet/v0", apiRouter)
app.use(errorHandler);

app.listen('3010', function () {
  console.log("Server launch");
}); 

