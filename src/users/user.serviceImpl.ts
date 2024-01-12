import { User, UserModel } from "./user.model";
import { UserService } from "./user.service";

export class UserServiceImpl implements UserService {
  getUsers = async () => {
    try {
      const users: User[] = await UserModel.find();
      return users;
    } catch (error) {
      throw error;
    }
  };

  getUsersById = async (id: string) => {
    try {
      const user: User | null = await UserModel.findById(id);
      return user;
    } catch (error) {
      throw error;
    }
  };

  createUser = async (body: User) => {
    try {
      const result = await UserModel.create(body);
      return result;
    } catch (error) {
      throw error;
    }
  };

  updateUser = async (body: User) => {
    try {
      const result = await UserModel.findByIdAndUpdate(body.id, body);
      return result;
    } catch (error) {
      throw error;
    }
  };
}
