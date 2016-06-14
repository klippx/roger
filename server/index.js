import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

let app = express();

app.use(bodyParser.urlencoded({
  extended: true,
  verify: (req, res, buf, encoding) => {
    console.log('--bodyParser: URLENCODED--, encoding:', encoding);
  }
}));

app.use(bodyParser.json({
  verify: (req, res, buf, encoding) => {
    console.log('--bodyParser: JSON--, encoding:', encoding);
  }
}));

import Routes from './routes';
Routes(app);

app.use(express.static('public'));

if (!process.env.MONGO_URL) {
  throw new Error("Please configure $MONGO_URL")
}

mongoose.connect(process.env.MONGO_URL);

app.listen(3100, () => console.log('App running at http://localhost:3100/'));
