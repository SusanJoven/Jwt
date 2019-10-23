function connect(callback){

    const MongoClient = require("mongodb").MongoClient;
    const url = "mongodb://localhost:27017";
    const client = new MongoClient(url, {useNewUrlParser: true });
  
    client.connect(errClient=>{
      if(errClient!==null) 
        console.log("Error while connecting to mongodb: ", errClient);  
      
      const db = client.db("dbEmploymentApp");
  
      const collection = db.collection("joboffers");
  
      callback(client, collection);
  
    });
  }
  exports.connect=connect;
