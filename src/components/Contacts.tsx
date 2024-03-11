import { useSwitchUser } from "@/context/SwitchUserContext";
import { FC } from "react";
import { Button } from "./ui/button";
import { MoveUpRight } from "lucide-react";

export const Contacts: FC = () => {
  const { user } = useSwitchUser();

  return (
    <div className="flex items-center gap-[20px] max-[639px]:flex-col">
      {user?.contact.map((item) => (
        <div key={item.id} className="">
          <Button className="rounded-full" size={"lg"}>
            <a className="" target="_blank" href={item.href}>
              <p className="flex gap-[10px] items-center">
                {item.title} <MoveUpRight size={15} />
              </p>
            </a>
          </Button>
        </div>
      ))}
    </div>
  );
};
