import { UserModel, CreateUserModel } from "../../domain/models/User";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { prisma } from "../database/prisma";

export class UserRepository implements IUserRepository {
  private readonly Db = prisma;

  async findByEmail(email: string): Promise<UserModel | null> {
    return await this.Db.user.findFirst({
      where: { email },
    });
  }
  async findAll(): Promise<UserModel[]> {
    return await this.Db.user.findMany();
  }
  async findById(id: number): Promise<UserModel | null> {
    return await this.Db.user.findFirst({
      where: { id },
    });
  }
  async save(data: CreateUserModel): Promise<UserModel> {
    return await this.Db.user.create({
      data,
    });
  }
}
