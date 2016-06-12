import mongoose from 'mongoose';

var LinkSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true, index: true, default: mongoose.Types.ObjectId },
  title: String,
  url: String
}, { id: false });

export default mongoose.model('Link', LinkSchema);
