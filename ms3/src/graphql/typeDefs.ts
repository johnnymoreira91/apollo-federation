import { gql } from "apollo-server-core";

export default gql `

  type Product {
    id: Int
    name: String
    price: Float
    description: String
  }

  type Query {
    getProducts: [Product]
  }
`