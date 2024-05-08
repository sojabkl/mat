const dbconnect=require('./mongo')
const express=require('express')
const app=express();
app.use(express.json())




//post API

app.post('/',async(req,res)=>{
    let result=await  dbconnect();
    result=await result.insertOne(req.body);
    res.send("data inserted succesfull")
})


//get API
app.get('/',async(req,res)=>{
    let result=await dbconnect();
    result=await result.find().toArray();
    res.send(result);
})

//put API
app.put('/:name',async(req,res)=>{
    let result=await dbconnect();
    result=await result.updateOne({name:req.params.anme},{$set:req.body});
    res.send("data  updated succ")
})

//delte api
app.delete('/:name',async(req,res)=>{
    let result=await dbconnect();
    result=await result.deleteOne({name:req.params.name})
    res.send("data delted successfully");
})


app.listen(3000);