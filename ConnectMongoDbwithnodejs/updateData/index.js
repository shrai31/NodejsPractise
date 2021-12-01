const dbConnect = require("../connectionCode/mongodb");

const updateData = async () => {
  let data = await dbConnect();
  const result = await data.updateOne(
    { name: "Dinmani" },
    {
      $set: { age: 24 },
    }
  );
  console.log("update function", result);
};

updateData();
