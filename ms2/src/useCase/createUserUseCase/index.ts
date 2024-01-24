import { UserRepository } from "../../infra/repositories/UserRepository";
import { CreateUserResolver } from "./createUserResolver.resolver";
import { CreateUserUseCase } from "./createUserUseCase";

const userRepository = new UserRepository()
const createUserUseCase = new CreateUserUseCase(userRepository)
const createUserResolver = new CreateUserResolver(createUserUseCase)

export {
  createUserResolver
}