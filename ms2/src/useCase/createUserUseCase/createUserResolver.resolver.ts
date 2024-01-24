import {
  // CreateUserModel,
  CreateUserModelInput,
  UserModel,
} from "../../domain/models/User";
import { CreateUserUseCase } from "./createUserUseCase";
// import { GraphQLResolveInfo } from "graphql";

export class CreateUserResolver {
  constructor(private readonly useCase: CreateUserUseCase) {}

  handle = async(
    _: unknown,
    { input }: CreateUserModelInput,
    // _context: any,
    // _info: GraphQLResolveInfo
  ) => {
    try {
      // console.log(info);
      console.log(input, "dataaa");
      const response = await this.useCase.execute(input);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
