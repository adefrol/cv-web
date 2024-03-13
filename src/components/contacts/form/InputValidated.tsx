import { Input } from "@/components/ui/input";
import { FC } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  register: UseFormRegisterReturn<"phoneNumber" | "email" | "message">;
  errors: FieldError['message']
  placeholder: string
}

export const InputValidated: FC<IProps> = ({ register, errors, placeholder }) => {
  return (
    <div className="">
      <Input {...register} placeholder={placeholder} />
      {errors && (
        <p className="text-red-500">
          {errors}
        </p>
      )}
    </div>
  );
};
