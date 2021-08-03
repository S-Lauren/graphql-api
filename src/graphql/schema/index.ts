const { buildSchema } = require("graphql")

module.exports = buildSchema(`

  type Product {
    _id: ID!
    name: String!
    image: String
    score: Int
    ingredients: String
  }


  input  ProductInput {
    name: String!
    image: String
    score: Int
    ingredients: String
  }

  type Query {
    products:[Product!]
  }

  type Mutation {
    createProduct(product:ProductInput): Product
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)