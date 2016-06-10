import {MongoClient} from 'mongodb';
let db;

if (!process.env.MONGO_URL) {
  throw new Error("Please configure $MONGO_URL")
}

MongoClient.connect(process.env.MONGO_URL, (err, database) => {
  if (err) throw err;

  db = database;
});

export { db as default }
