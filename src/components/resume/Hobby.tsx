import { IUser } from "@/interfaces/user.interface";
import { FC } from "react";

export const Hobby: FC<{ user: IUser }> = ({ user }) => {
  return (
    <div className="">
      {user?.resume.map((item) => (
        <div key={item.id} className="">
          {item.hobby.body}
        </div>
      ))}
    </div>
  );
};
