import {MongoClient} from 'mongodb';
let db;

MongoClient.connect(process.env.MONGO_URL, (err, database) => {
  if (err) throw err;

  db = database;
});

export { db as default }
