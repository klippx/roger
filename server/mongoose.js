import mongoose from 'mongoose';

if (!process.env.MONGO_URL) {
  throw new Error("Please configure $MONGO_URL")
}

mongoose.connect(process.env.MONGO_URL);
