import { gql } from "apollo-server-core";
// import { GraphQLDateTime } from "graphql-scalars";

export default gql `

  scalar DateTime

  type User {
    id: Int
    name: String
    uuid: String
    superUser: Boolean
    email: String
    password: String
    cpf: String
    rg: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input CreateUserInput {
    name: String
    superUser: Boolean
    email: String
    password: String
    cpf: String
    rg: String
  }

  type Query {
    getUsers: [User]
  }

  type Mutation {
    createUser(input: CreateUserInput): User
  }
`