import { FC, useState } from "react";
import { PageTitle } from "../PageTitle";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const sidebar = [
  {
    id: 1,
    title: "Опыт",
  },

  {
    id: 2,
    title: "Образование",
  },

  {
    id: 3,
    title: "Технологии",
  },

  {
    id: 4,
    title: "Хобби",
  },

  {
    id: 5,
    title: "Контакты",
  },
];

interface IProps {
  children: React.ReactNode;
  focus: number;
  setFocus: React.Dispatch<React.SetStateAction<number>>;
}

const number = 1;

export const SidebarLayout: FC<IProps> = ({ children, focus, setFocus }) => {
  if (number === 1) {
    return (
      <div className="">
        <PageTitle title="Резюме" />

        <div className="lg:flex items-start lg:gap-[140px] mt-[50px] ">
          <div
            className={cn("flex flex-col gap-[10px] max-[639px]:hidden", {
              "max-[639px]:w-[400px]": focus === 1,
            })}
          >
            {sidebar.map((item) => (
              <li
                key={item.id}
                className={cn(
                  "uppercase font-bold max-[639px]:text-[12px] text-black/20 cursor-pointer",
                  {
                    "text-black transition duration-300": focus === item.id,
                  }
                )}
                onClick={() => setFocus(item.id)}
              >
                {item.title}
              </li>
            ))}
          </div>

          <ScrollArea className="w-96 whitespace-nowrap max-[639px]:visible lg:hidden">
            <div className="flex items-center w-max space-x-8 max-[639px]:mb-4">
              {sidebar.map((item) => (
                <li
                  key={item.id}
                  className={cn(
                    "uppercase font-bold max-[639px]:text-[16px] text-black/20 cursor-pointer",
                    {
                      "text-black transition duration-300": focus === item.id,
                    }
                  )}
                  onClick={() => setFocus(item.id)}
                >
                  {item.title}
                </li>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <div className="max-[639px]:mt-[20px] max-[639px]:flex max-[639px]:justify-center">
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <PageTitle title="Резюме" />

      <div className="flex items-start lg:gap-[140px] mt-[50px] max-[639px]:gap-[30px]">
        <div
          className={cn("flex flex-col gap-[10px]", {
            "max-[639px]:w-[400px]": focus === 1,
          })}
        >
          {sidebar.map((item) => (
            <li
              key={item.id}
              className={cn(
                "uppercase font-bold max-[639px]:text-[12px] text-black/20 cursor-pointer",
                {
                  "text-black transition duration-300": focus === item.id,
                }
              )}
              onClick={() => setFocus(item.id)}
            >
              {item.title}
            </li>
          ))}
        </div>

        <div className="">{children}</div>
      </div>
    </div>
  );
};
