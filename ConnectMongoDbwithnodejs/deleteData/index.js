const dbConnect = require("../connectionCode/mongodb");

const deleteData = async () => {
  let data = await dbConnect();
  const result = await data.deleteMany({
    name: "Shubham",
  });
  console.log("Delete Data", result);
};

deleteData();
