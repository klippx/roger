import mongoose from 'mongoose';

var LinkSchema = new mongoose.Schema({
  title: String,
  url: String
});

export default mongoose.model('Link', LinkSchema);
