import { IMAGE_URL } from "@/constants/images";
import { MoveUpRight } from "lucide-react";
import { FC } from "react";
import tg from "../assets/tg.svg";
import vk from "../assets/vk.svg";
import { SocialIcon } from "./contacts/SocialIcon";
import { FormComponent } from "./contacts/form/FormComponent";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

export const Contacts: FC = () => {
  return (
    <div className="flex items-center gap-[20px] max-[639px]:flex-col mt-[20px]">
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            className="rounded-full flex gap-[10px] items-center"
            size={"lg"}
          >
            Связаться с нами <MoveUpRight size={15} />
          </Button>
        </DrawerTrigger>

        <DrawerContent
          style={{ backgroundImage: `url(${IMAGE_URL.bg})` }}
          className="py-[40px] bg-cover"
        >
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader className="mt-[10px]">
              <DrawerTitle className="text-center">
                Связаться с нами
              </DrawerTitle>

              <DrawerDescription className="text-center font-light text-black">
                Выберите один из способов связи
              </DrawerDescription>
            </DrawerHeader>

            <div className="p-4 pb-0 space-y-4">
              <FormComponent />

              <div className="flex justify-center items-center gap-2">
                <div className="w-full h-[0.5px] bg-black" />
                <p className="uppercase text-center text-black font-light">или</p>
                <div className="w-full h-[0.5px] bg-black" />
              </div>

              <div className="flex items-center justify-center">
                <div className="flex items-center gap-5">
                  <SocialIcon icon={tg} />
                  <SocialIcon icon={vk} />
                </div>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
