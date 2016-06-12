import express from 'express';
import mongoose from 'mongoose';

if (!process.env.MONGO_URL) {
  throw new Error("Please configure $MONGO_URL")
}

mongoose.connect(process.env.MONGO_URL);

let app = express();

app.use(express.static('public'));

import Routes from './routes';
Routes(app);

app.listen(3100, () => console.log('App running at http://localhost:3100/'));
