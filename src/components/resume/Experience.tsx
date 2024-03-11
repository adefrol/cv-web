import { IUser } from "@/interfaces/user.interface";
import { FC } from "react";

export const Experience: FC<{ user: IUser }> = ({ user }) => {
  return (
    <div className="">
      {user?.resume.map((item) => (
        <div key={item.id} className="flex flex-col gap-[60px]">
          {item.experience.map((exp) => (
            <div key={exp.id} className="space-y-[5px]">
              <p className="text-black/50 font-semibold">{exp.dateTime}</p>

              <p className="font-bold text-[25px] max-[639px]:text-[20px]">
                {exp.title}
              </p>

              <p className="max-w-[800px] max-[639px]:max-w-[300px]">{exp.body}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
