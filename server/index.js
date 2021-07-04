const express = require("express");
const app = express();
const morgan = require("morgan")
const mongoose = require("mongoose");
const cors = require('cors');
const admin = require('./schema1');
require('dotenv/config');


app.use(cors());
app.use(express.json());

app.use(morgan('dev'));

const router = require('./router');
app.use("/info",router);

app.post("/",async(req,res) =>{
    const postadmin = await new admin({
        Email : req.body.Email,
        Password : req.body.Password
    });
    const saveadmin = await postadmin.save();
    res.json(saveadmin);
});

app.get("/",async(req,res) =>{
    var getadmin = await admin.find({}).select({_id:0, Password:1, Email:1})
    res.json(getadmin);
});

app.listen(5000,() =>{
    console.log("Server connected successfully on 5000");
});

mongoose.connect(process.env.MYDB_CONNECTION,{useNewUrlParser: true,useUnifiedTopology: true},(err) =>{
     if(err)
     {
         console.log("Not connected");
     }
     console.log("Database connected successfully");
});
