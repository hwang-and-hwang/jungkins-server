import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
  title: String,
  brand: String,
  price: String,
  age: Number,
  user_id: ObjectId,
});

export default mongoose.model('User', userSchema);
