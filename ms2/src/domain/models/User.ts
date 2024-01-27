export interface UserModel {
  id: number
  name: string
  uuid: string
  superUser: boolean
  cpf: string
  rg: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateUserModel {
  name: string
  superUser: boolean
  cpf: string
  rg: string
}

export interface CreateUserModelInput {
  input: CreateUserModel
}