import { IAuthenticationRequestDTO, IAuthenticationResponse } from '../../domain/models/Authentication'
import { IUserRepository } from '../../domain/repositories/IUserRepository'
import { sign } from 'jsonwebtoken'

export class AuthenticationUseCase {

  constructor(
    private readonly userRepository: IUserRepository
  ) {}

  async execute(data: IAuthenticationRequestDTO): Promise<IAuthenticationResponse> {

    const user = await this.userRepository.findByEmail(data.email)

    if (!user) {
      throw new Error('Credentials not found / Wrong credentials')
    }

    if (data.password !== user.password) {
      throw new Error('Credentials not found / Wrong credentials')
    }

    const payload = {
      id: user.id,
      email: user.email,
    }

    const accessToken = sign(payload, 'teste', {expiresIn: 3600})

    return {
      accessToken,
      payload
    }

  }
}