import { IAuthenticationInput } from "../../domain/models/Authentication"
import { AuthenticationUseCase } from "./AuthenticationUseCase"

export class AuthenticationResolver {
  constructor(
    private readonly useCase: AuthenticationUseCase
  ) {}
  handle =async (
    _: unknown,
    { input }: IAuthenticationInput,
    ___: unknown
  ) => {
    try {
      return await this.useCase.execute({
        email: input.email,
        password: input.password
      })
    } catch (error) {
      console.log(error)
    }
  }
}