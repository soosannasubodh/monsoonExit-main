 //1.import
const express= require('express')
var cors = require('cors')
require("./connection")
var empModel=require("./model/employee")
//2.initialisation
var app=express()
//midd
app.use(express.json());
app.use(cors())

//3.api creation
app.post('/add',async(req,res)=>{
    try {
        await empModel(req.body).save()
        res.send({message:"data model"})
        
    } catch (error) {
        console.log(error); 
    }
})
// view
app.get('/view',async(req,res)=>{
    try {
        var data=await empModel.find()
        res.send(data)
        
    } catch (error) {
        console.log(error);
    }
})
//delete
app.delete("/remove/:id",async(req,res)=>{
   try{
    await empModel.findByIdAndDelete(req.params.id)
    res.send({message:"Deleted successfully"})
   }catch(error){
    console.log(error);
   }
})
//update
app.put("/update/:id",async(req,res)=>{
    try{
     await empModel.findByIdAndUpdate(req.params.id,req.body)
     res.send({message:"Updated successfully"})
    }catch(error){
     console.log(error);
    }

})
app.get('/', (req, res) => {
    res.send('Hello World')
  })
  

//4.port setting
app.listen(3004,()=>{
    console.log("port is running at 3004")
})