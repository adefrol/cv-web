import { IUser } from "@/interfaces/user.interface";
import { FC } from "react";

export const Education: FC<{ user: IUser }> = ({user}) => {
  return <div className="">
    {user?.resume.map((item) => (
      <div className="" key={item.id}>
        {item.education.map((edu) => (
          <div className="" key={edu.id}>
            {edu.title}
          </div>
        ))}
      </div>
    ))}
  </div>;
};