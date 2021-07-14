const { buildSchema } = require("graphql");
module.exports = buildSchema(`

  type Product {
    _id: ID!
    name: String!
    image: String
    score: Int
  }


  input  ProductInput {
    name: String!
  }

  type Query {
    products:[Product!]
  }

  type Mutation {
    createProdcut(product:ProductInput): Product
  }

  schema {
    query: Query
    mutation: Mutation
  }
`);
//# sourceMappingURL=productSchema.js.map