const dbConnect = require('../connectionCode/mongodb');

const insert = async () =>{
    const db = await dbConnect();
    const result = await db.insert([{
        name: "Ashutosh",
        lname: "Rai",
        gender: "male",
        age: 30,
    },
    {
        name: "Ankita",
        lname: "Rai",
        gender: "female",
        age: 25,
    },
    {
        name: "Shubham",
        lname: "Rai",
        gender: "male",
        age: 23,
    }
])
    if(result.acknowledged){
        console.log("data inserted");
    }
    console.log("insert function", result);
}

insert()