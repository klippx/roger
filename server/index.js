import express from 'express';
import {MongoClient} from 'mongodb';

let app = express();

app.use(express.static('public'));

require('./routes')(app)

MongoClient.connect(process.env.MONGO_URL, (err, database) => {
  if (err) throw err;

  app.db = database;
  app.listen(3000, () => console.log('Listening on port 3000'));
});
