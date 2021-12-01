
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';

const databaseName ='e-comm';  // dbname

const client = new MongoClient(url); // mongodb fetching data from this url

async function dbConnect(){
    let result = await client.connect(); //return the promise so use async await
    
    db = result.db(databaseName); // connect to database
    return db.collection('products');

//   collection = db.collection('products');
//     let data = await collection.find({}).toArray()
    // console.log(data);
}

// dbConnect(); 
// uses of promise
// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.warn(data);
//     })
// })


module.exports = dbConnect;