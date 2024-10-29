const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

let database;

module.exports = {
   connectToServer: async () => {
      try {
         await mongoClient.connect();
         database = mongoClient.db('planmytrip');
      } catch (err) {
         console.error('Failed to connect to MongoDB', err);
      }
   },
   getDatabase: () => {
      return database;
   }
};