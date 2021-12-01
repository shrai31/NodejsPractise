const dbConnect = require ('../connectionCode/mongodb')

const main = async () =>{
    let data = await dbConnect();
    data =  await data.find().toArray();
    console.warn(data);
}
main();


// uses of promise
// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.warn(data);
//     })
// })
// dbConnect(); 
