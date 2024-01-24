import { createUserResolver } from '../useCase/createUserUseCase'
import { listUserResolver } from '../useCase/listUserUseCase'
const resolvers = {
  Query: {
    getUsers: listUserResolver.handle
  },

  Mutation: {
    createUser: createUserResolver.handle
  }
}

export {
  resolvers as userResolver
}