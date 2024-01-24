import { UserModel } from '../../domain/models/User'
import { IUserRepository } from '../../domain/repositories/IUserRepository'

export class ListUserUseCase {

  constructor(
    private readonly userRepository: IUserRepository
  ) {}

  async execute(): Promise<UserModel[]> {
    return await this.userRepository.findAll()
  }
}