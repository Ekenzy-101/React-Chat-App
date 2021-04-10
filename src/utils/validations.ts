import { Resolver } from "react-hook-form";
import validator from "validator";

const validateEmail = (value: string) => {
  if (!validator.isEmail(value)) return "Email is not valid";

  return undefined;
};

const validateName = (value: string) => {
  if (validator.isEmpty(value)) return "Name is required";

  if (!validator.isLength(value, { max: 50 }))
    return "Name should be less than 50 characters";

  return undefined;
};

const validatePassword = (value: string) => {
  if (!validator.isLength(value, { min: 6 }))
    return "Password should be up to 6 characters";

  return undefined;
};

const validateUserId = (value: string) => {
  if (!validator.isMongoId(value)) return "User ID is invalid";

  return undefined;
};

const validate = {
  email: validateEmail,
  name: validateName,
  password: validatePassword,
  userId: validateUserId,
};

export interface FormValues {
  name: string;
  email: string;
  password: string;
  userId: string;
}

export const resolver: Resolver<FormValues> = async (values) => {
  const errors: Record<string, any> = {};

  Object.keys(values).forEach((field) => {
    const key = field as keyof FormValues;
    const message = validate[key](values[key]);
    if (message) {
      errors[key] = {
        type: "",
        message,
      };
    }
  });

  return {
    values,
    errors,
  };
};

export const isObject = (value: any) =>
  value && typeof value === "object" && !Array.isArray(value);
