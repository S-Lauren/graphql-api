import mongoose, { model } from 'mongoose';

interface IProduct extends mongoose.Document {
  name: string;
  image: string;
  score: number;
  ingredients: string;
}

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: String,
  score: Number,
  ingredients: String,
})
const ProductModel = model<IProduct>("Product", schema);

export { ProductModel }