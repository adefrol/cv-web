import { IUser } from "@/interfaces/user.interface";
import { FC } from "react";

export const Development: FC<{ user: IUser }> = ({ user }) => {
  return (
    <div className="">
      {user.resume.map((item) => (
        <div className="grid grid-cols-2 lg:gap-[60px]">
          <div className="space-y-[20px]">
            {item.development
              .filter((dev) => dev.title === "Язык")
              .map((dev) => (
                <div key={dev.id} className="flex flex-col">
                  <p className="text-black/50 font-semibold">{dev.title}</p>

                  <p className="font-bold">{dev.body}</p>
                </div>
              ))}
          </div>

          <div className="space-y-[20px]">
            {item.development
              .filter((dev) => dev.title === "Библиотека")
              .map((dev) => (
                <div key={dev.id} className="flex flex-col">
                  <p className="text-black/50 font-semibold">{dev.title}</p>

                  <p className="font-bold">{dev.body}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
