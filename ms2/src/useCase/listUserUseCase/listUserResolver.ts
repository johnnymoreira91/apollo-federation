import { ListUserUseCase } from "./listUserUseCase";

export class ListUserResolver {
  constructor(
    private readonly useCase: ListUserUseCase
  ) {}
  handle =async (
    _: unknown,
    __: unknown,
    ___: unknown
  ) => {
    try {
      return await this.useCase.execute()
    } catch (error) {
      console.log(error)
    }
  }
}