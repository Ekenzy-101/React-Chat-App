import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-hot-toast";

import Button from "../components/form/Button";
import Form from "../components/form/Form";
import Input from "../components/form/Input";
import { TO_CHATS_PAGE, TO_LOGIN_PAGE } from "../utils/contants";
import WhatsApp from "../utils/icons/WhatsApp";
import Loading from "../utils/icons/Loading";
import { signUp } from "../utils/services/auth";
import { FormValues, isObject, resolver } from "../utils/validations";

const RegisterPage: React.FC = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(signUp);

  const history = useHistory();
  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
  } = useForm<FormValues>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: { email: "", name: "", password: "" },
    resolver,
  });

  const onSubmit = async (formData: FormValues) => {
    try {
      const data = await mutateAsync(formData);
      queryClient.setQueryData("authUser", () => data);

      history.push(TO_CHATS_PAGE);
    } catch (ex) {
      const error = ex.response?.data;

      if (isObject(error) && error.email) {
        setError("email", { message: error.email });
      } else {
        toast.error("An unexpected error occured");
      }
    }
  };

  return (
    <div className="bg-white flex items-center min-h-screen w-screen">
      <div className="sm:max-w-xs sm:w-full w-10/12 mx-auto">
        <div className="mx-auto w-min mb-11">
          <WhatsApp innerColor="#FAFAFA" outerColor="#1EBE71" size="large" />
        </div>
        <p className="font-geo-medium text-2xl text-center mb-8">
          Create account
        </p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("name")}
            placeholder="Name"
            error={errors.name?.message}
          />
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
          <br />
          <br />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <Loading /> : "Register"}
          </Button>
        </Form>
        <p className="font-geo-regular mt-4 text-sm flex justify-between">
          Already have an account?
          <Link to={TO_LOGIN_PAGE} className="text-green no-underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
