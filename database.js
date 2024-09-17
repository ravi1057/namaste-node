const { MongoClient } = require("mongodb");

const url = "mongodb+srv://ravi1234:ravi1057@ravicluster.9odgvza.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

    const data = {
      firstname: "ravi",
      lastname: "parshanaboina",
      city: "Suryapet",
      phoneNo: "6123407819",
    };

  
    const insertResult = await collection.insertOne(data);
    console.log("Inserted documents =>", insertResult);

  // Read
//   const findResult = await collection.find({}).toArray();
//   console.log("Found documents =>", findResult);

  //Count Documents
//   const countDocuments = await collection.countDocuments({});
//   console.log("countDocuments==>", countDocuments);

//   //udpate
//   const updateResult = await collection.updateOne({
//     $set: { firstname: "venu" },
//   });
//   console.log("Updated documents =>", updateResult);

  //delete
//   const deleteResult = await collection.deleteMany({});
//   console.log("Deleted documents =>", deleteResult);

const result = await collection.find({firstname:"mani"}).count();
console.log(result)

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
