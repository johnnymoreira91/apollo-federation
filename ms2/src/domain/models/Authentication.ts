export interface IAuthenticationRequestDTO {
  email: string
  password: string
}

export interface IAuthenticationInput {
  input: IAuthenticationRequestDTO
}

interface IAuthenticationPayload {
  id: number
  email: string
}

export interface IAuthenticationResponse {
  accessToken: string
  payload: IAuthenticationPayload
}