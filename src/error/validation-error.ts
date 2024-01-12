import { Error } from "mongoose";

class ValidationException extends Error {
  status: number;
  errors: Error.ValidationError;

  constructor(errors: Error.ValidationError) {
    super("Invalid Payload");
    this.status = 400;
    this.errors = errors;

    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

export default ValidationException;
