import { authenticationResolver } from '../useCase/authentication'
import { createUserResolver } from '../useCase/createUserUseCase'
import { listUserResolver } from '../useCase/listUserUseCase'
const resolvers = {
  Query: {
    getUsers: listUserResolver.handle
  },

  Mutation: {
    createUser: createUserResolver.handle,
    signIn: authenticationResolver.handle
  }
}

export {
  resolvers as userResolver
}