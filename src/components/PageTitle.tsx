import { FC } from "react";

export const PageTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="max-w-fit relative">
      <h1 className="font-bold text-[48px]">{title}</h1>
      <div className="h-[16px] w-full bg-black/10 absolute bottom-1.5 left-1" />
    </div>
  );
};
