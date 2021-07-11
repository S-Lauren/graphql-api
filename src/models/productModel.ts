import mongoose, { model } from 'mongoose';

interface IProduct extends mongoose.Document {
  name: string;
  image: string;
  score: number;
}

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: String,
  score: Number
})
const ProductModel = model<IProduct>("Product", schema);

export { ProductModel }