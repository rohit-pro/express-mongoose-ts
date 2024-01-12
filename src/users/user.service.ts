import { UpdateWriteOpResult } from "mongoose";
import { User } from "./user.model";

export interface UserService {
  getUsers: () => Promise<User[]>;
  getUsersById: (id: string) => Promise<User | null>;
  createUser: (body: User) => Promise<User>;
  updateUser: (body: User) => Promise<User | null>;
}
