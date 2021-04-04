import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-hot-toast";

import Button from "../components/form/Button";
import Input from "../components/form/Input";
import { TO_CHATS_PAGE, TO_REGISTER_PAGE } from "../utils/contants";
import Loading from "../utils/icons/Loading";
import WhatsApp from "../utils/icons/WhatsApp";
import { login } from "../utils/services/auth";
import { FormValues, isObject, resolver } from "../utils/validations";

const LoginPage: React.FC = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(login);

  const history = useHistory();
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: { email: "", password: "" },
    resolver,
  });

  const onSubmit = async (formData: FormValues) => {
    try {
      const data = await mutateAsync(formData);
      queryClient.setQueryData("authUser", () => data);

      history.push(TO_CHATS_PAGE);
    } catch (ex) {
      const error = ex.response?.data;

      console.log(error.message);

      if (isObject(error) && error.message) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occured");
      }
    }
  };

  return (
    <div className="bg-white flex items-center min-h-screen  w-screen">
      <div className="sm:max-w-xs sm:w-full w-10/12 mx-auto">
        <div className="mx-auto w-min mb-11">
          <WhatsApp innerColor="#FAFAFA" outerColor="#1EBE71" size="large" />
        </div>
        <p className="font-geo-medium text-2xl text-center mb-8">
          Welcome to Whatsapp
        </p>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("email")}
            placeholder="Email"
            error={errors.email?.message}
          />
          <Input
            {...register("password")}
            placeholder="Password"
            type="password"
            error={errors.password?.message}
          />
          <p className="font-geo-regular mb-4 text-sm flex justify-between">
            Forgot Password?
            <Link to={TO_REGISTER_PAGE} className="text-green no-underline">
              Reset
            </Link>
          </p>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <Loading /> : "Login"}
          </Button>
        </form>
        <p className="font-geo-regular mt-4 text-sm flex justify-between">
          Don't have an account?
          <Link to={TO_REGISTER_PAGE} className="text-green no-underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
