const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070; 

app.use(cors());
app.use(bodyparser.json());


const URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 8070,
    useFindAndModify: false,
    useCreateIndex: true,
    poolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
  })
  

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("MongoDB connection success!");
})

const chemicalRouter = require("./routes/chemicals.route");
const fertilizerRouter = require("./routes/fertilizers.route");
const harvestRouter = require("./routes/harvest.route");

const signuprouter = require("./routes/signUp.route");
const loginRouter = require("./routes/login.route");
const todoRouter = require("./routes/todo.route");
const ssalesmanagementRouter = require("./routes/salesmanagement.route");
const cropmonitorRouter = require("./routes/cropmonitor.route");

app.use("/chemical",chemicalRouter);

app.use("/fertilizer",fertilizerRouter);

app.use("/harvest",harvestRouter);

app.use("/login",loginRouter);

app.use("/signup",signuprouter);


app.use("/todo",todoRouter);


app.use("/sales",ssalesmanagementRouter);


app.use("/cropmonitor",cropmonitorRouter);




app.listen(PORT, () =>{
    console.log(`Server is up and running on port ${PORT}`)
})

