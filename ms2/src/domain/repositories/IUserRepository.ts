import { CreateUserModel, UserModel } from "../models/User";

export interface IUserRepository {
  findAll(): Promise<UserModel[]>
  findById(id: number): Promise<UserModel | null>
  findByEmail(email: string): Promise<UserModel | null>
  save(data: CreateUserModel): Promise<UserModel>
}