import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import Loading from "../../utils/icons/Loading";
import { createRoom } from "../../utils/services/room";
import { FormValues, isObject, resolver } from "../../utils/validations";
import Button from "../form/Button";
import Form from "../form/Form";
import Input from "../form/Input";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<Props> = ({ open, onClose }) => {
  const { mutateAsync, isLoading } = useMutation(createRoom);
  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
    setValue,
  } = useForm<FormValues>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: { userId: "" },
    resolver,
  });

  const handleReset = () => {
    setError("userId", {});
    setValue("userId", "");
    onClose();
  };

  const onSubmit = async (formData: FormValues) => {
    try {
      await mutateAsync(formData.userId);
      handleReset();
    } catch (ex) {
      const error = ex.response?.data;

      if (isObject(error) && error.userId) {
        setError("userId", { type: "validate", message: error.userId });
      } else {
        toast.error("An unexpected error occured");
      }
    }
  };

  return (
    <>
      {open ? (
        <div className="fixed inset-0 z-20  overflow-auto flex bg-transparent  transition-opacity">
          <div className="relative p-8 z-50 bg-white w-full max-w-md m-auto flex-col flex rounded-xl shadow-xl">
            <p className="text-center font-nova-bold text-xl mb-3">
              Add Contact
            </p>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="userId"
                {...register("userId")}
                error={errors.userId?.message}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? <Loading /> : "Save"}
              </Button>
              <Button
                type="button"
                className="bg-white border-gray border-solid border focus:outline-none h-11 hover:bg-gray hover:bg-opacity-20 rounded-2.5xl mt-4 text-black w-full"
                onClick={handleReset}
              >
                Cancel
              </Button>
            </Form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ContactModal;
