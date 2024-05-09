const {MongoClient}=require('mongodb')
const url=""
const database=''
const client=new MongoClient(url)

const dbconnect=async()=>{
    const result=await client.connect();
    const db =await result.db(database);
    return db.collection('prp');
}

module.exports=dbconnect;