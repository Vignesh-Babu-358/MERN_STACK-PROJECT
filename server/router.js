const e = require("express");
const express = require("express");
const route = express.Router();
const schema = require('./schema');

route.post("/",async(req,res) =>{
   const postperson = await new schema({
        Name : req.body.Name,
        Age : req.body.Age,
        Email : req.body.Email,
        Phone : req.body.Phone
   });
   const saveperson = await postperson.save();
   res.json(saveperson);
});

route.get("/",async(req,res) =>{
     const getall = await schema.find();
     res.json(getall);
});

/*route.get("/:Age",async(req,res) =>{
     const getall = await schema.findOne({age:req.params.Age});
     res.json(getall);
});*/


route.put("/update",async(req,res) =>{
     var update = await schema.update({_id:req.body._id},{$set:{
          Name:req.body.Name,
          Age:req.body.Age,
          Email:req.body.Email,
          Phone:req.body.Phone
     }});
     res.json(update);
});

route.delete("/delete/:_id",async(req,res) =>{
      const del = await schema.findByIdAndRemove(req.params._id).then(e =>{
           res.json({messege:"deleted successfully"})
      });
});

module.exports = route;