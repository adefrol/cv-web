import { cn } from "@/lib/utils";
import { Link, LinkProps, useRouter } from "@tanstack/react-router";
import { FC, useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { users } from "@/lib/users";
import { useSwitchUser } from "@/context/SwitchUserContext";

interface INavbar {
  id: number;
  title: string;
  href: LinkProps["to"];
}

const navbar: INavbar[] = [
  {
    id: 1,
    title: "О нас",
    href: "/",
  },

  {
    id: 2,
    title: "Проекты",
    href: "/projects",
  },

  {
    id: 3,
    title: "Резюме",
    href: "/resume",
  },
];

interface IProps {}

export const Header: FC<IProps> = ({}) => {
  const { switchUser, user: currentUser } = useSwitchUser();
  const { latestLocation } = useRouter();
  const [focus, setFocus] = useState(latestLocation.pathname);
  const [logo, setLogo] = useState<boolean>(true);

  useEffect(() => {
    if (latestLocation.pathname === "/resume") {
      setLogo(false);
    }
    return () => setLogo(true);
  }, [latestLocation.pathname]);

  return (
    <div className="flex items-center justify-between max-[639px]:flex-col max-[639px]:gap-[30px]">
      <div className="flex items-center gap-[30px] h-[75px] max-[639px]:gap-[50px]">
        {logo ? (
          <div className="">
            <p className="text-3xl logo-varela select-none">illumed<span className='text-[#7266e2]'>Web</span></p>
          </div>
        ) : (
          <>
            {users.map((user) => (
              <div
                key={user.id}
                onClick={() => switchUser(user.id)}
                className={cn("flex flex-col items-center opacity-50", {
                  "opacity-100 transition duration-300":
                    user.id === currentUser?.id,
                })}
              >
                <Avatar className="cursor-pointer w-[50px] h-[50px] max-[639px]:w-[60px] max-[639px]:h-[60px]">
                  <AvatarImage src={user.img} alt={user.alt}  />
                  <AvatarFallback>{user.name}</AvatarFallback>
                </Avatar>

                <p className="">{user.name}</p>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="bg-white py-[10px] px-[20px] rounded-full w-fit flex gap-[40px] items-center shadow-[#7266e26a] max-[639px]:shadow-[#efdae6] shadow-xl">
        {navbar.map((navItem) => (
          <div
            key={navItem.id}
            onClick={() => setFocus(navItem.href)}
            className="cursor-pointer"
          >
            <Link
              to={navItem.href}
              className={cn("font-semibold text-black/30", {
                "text-black transition duration-300": focus === navItem.href,
              })}
            >
              {navItem.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
