import { ListUserUseCase } from "./listUserUseCase";
import { UserRepository } from '../../infra/repositories/UserRepository'
import { ListUserResolver } from "./listUserResolver";

const userRepository = new UserRepository()
const listUserUseCase = new ListUserUseCase(userRepository)
const listUserResolver = new ListUserResolver(listUserUseCase)

export {
  listUserResolver
}