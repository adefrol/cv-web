import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../../ui/button";
import { Textarea } from "../../ui/textarea";
import { InputValidated } from "./InputValidated";

export const FormComponent: FC = () => {
  const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );

  const schema = z.object({
    phoneNumber: z
      .string()
      .regex(phoneRegex, { message: "Некорректный номер телефона" })
      .min(11, { message: "Некорректный номер телефона" })
      .max(12, { message: "Некорректный номер телефона" }),
    email: z.string().email({ message: "Некорректная почта" }),
    message: z.string(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      phoneNumber: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(schema),
  });

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          toast.success("Сообщение отправлено", {
            description: new Date().toLocaleString(),
          });
        })}
      >
        <div className="space-y-[20px]">
          <div className="">
            <InputValidated
              placeholder="Номер телефона"
              register={register("phoneNumber")}
              errors={errors.phoneNumber?.message}
            />
          </div>

          <div className="">
            <InputValidated
              placeholder="Электронная почта"
              register={register("email")}
              errors={errors.email?.message}
            />
          </div>

          <Textarea {...register("message")} placeholder="Сообщение" />

          <Button
            className="w-full"
            size={"lg"}
            type="submit"
            variant="outline"
          >
            Отправить
          </Button>
        </div>
      </form>
    </div>
  );
};
