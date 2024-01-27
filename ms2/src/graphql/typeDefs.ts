import { gql } from "apollo-server-core";
// import { GraphQLDateTime } from "graphql-scalars";

export default gql`
  directive @upper on FIELD_DEFINITION

  scalar DateTime

  type User {
    id: Int
    name: String @upper
    uuid: String
    superUser: Boolean
    email: String
    password: String
    cpf: String
    rg: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  type SignInPayload {
    id: Int 
    email: String
  }

  type SignInResponse {
    accessToken: String
    payload: SignInPayload
  }

  input CreateUserInput {
    name: String
    superUser: Boolean
    email: String
    password: String
    cpf: String
    rg: String
  }

  input SignInput {
    email: String
    password: String
  }

  type Query {
    getUsers: [User]
  }

  type Mutation {
    createUser(input: CreateUserInput): User
    signIn(input: SignInput): SignInResponse
  }
`;
