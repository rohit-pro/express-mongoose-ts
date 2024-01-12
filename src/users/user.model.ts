import { Schema, Types, model } from "mongoose";

export const STATUS_ENUM_VALUE = ["ACTIVE", "INACTIVE"];

export type STATUS_TYPE = "ACTIVE" | "INACTIVE";

export interface User {
  id: Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  status: STATUS_TYPE;
}

const userSchema = new Schema<User>({
  firstName: {
    type: String,
    required: [true, "firstName is required"],
  },
  lastName: {
    type: String,
    required: [true, "lastName is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  status: {
    type: String,
    required: [true, "status is required"],
    enum: STATUS_ENUM_VALUE,
  },
});

export const UserModel = model("User", userSchema);
