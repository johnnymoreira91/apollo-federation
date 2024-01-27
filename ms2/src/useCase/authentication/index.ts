import { UserRepository } from "../../infra/repositories/UserRepository";
import { AuthenticationResolver } from "./AuthenticationResolver";
import { AuthenticationUseCase } from "./AuthenticationUseCase";

const userRepository = new UserRepository()
const authenticationUseCase = new AuthenticationUseCase(userRepository)
const authenticationResolver = new AuthenticationResolver(authenticationUseCase)

export {
  authenticationResolver
}