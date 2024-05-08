const {MongoClient}=require('mongodb')
const url="mongodb+srv://rudraredblack:root@cluster0.cialtoz.mongodb.net/"
const database='student'
const client=new MongoClient(url)

const dbconnect=async()=>{
    const result=await client.connect();
    const db =await result.db(database);
    return db.collection('profile');
}

module.exports=dbconnect;