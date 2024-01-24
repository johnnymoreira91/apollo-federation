import { CreateUserModel, UserModel } from "../../domain/models/User";
import { IUserRepository } from "../../domain/repositories/IUserRepository";

export class CreateUserUseCase {

  constructor(
    private readonly userRepository: IUserRepository
  ) {}

  async execute(data: CreateUserModel): Promise<UserModel> {
    console.log(data, "RESOOLVERRRRRRRRRRRRRRRRRRRRRRRRR")
    return await this.userRepository.save(data)
  }
}