import express from 'express';
import mongoose from 'mongoose';
import { ProductModel } from './models/productModel';

require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000;

/* GraphQL Schema and Server */
const { graphqlHTTP } = require("express-graphql")
const schema = require("./graphql/schema")
const resolvers = require("./graphql/resolvers")

/* Root Route */
app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});


/* Mongoose Connection */
const connectToMongoDB = async () => {
  mongoose.connect(process.env.MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log("Database connected!"))
    .catch(err => console.log(err));

  // Fetch all products
  const getProduct = await ProductModel.find({})
  console.log(getProduct)
}

connectToMongoDB()

/* Connect to graphQL express server */
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
)




app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});