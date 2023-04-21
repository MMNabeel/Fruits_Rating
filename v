const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    console.log("Connection Successfully created: ");
    const database = client.db("fruits");
    database.insertMany([
    {
    name: "Apple",
    score: 8,
    review: "doctor away"
    },
    {
    name: "Orange",
    score: 9,
    review: "Vitamin C"
    }
    ])


    console.log(result);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
