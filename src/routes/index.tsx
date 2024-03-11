import { Contacts } from "@/components/Contacts";
import { PageTitle } from "@/components/PageTitle";
import { useSwitchUser } from "@/context/SwitchUserContext";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => <Home />,
});

const Home = () => {
  const { user } = useSwitchUser();

  return (
    <div className="">
      <div className="flex flex-col gap-[20px]">
        <PageTitle title="Привет!" />

        <p className="max-w-[600px] font-semibold text-[24px]">
          {user?.resume.map((item) => <p>{item.title}</p>)}
        </p>

        <p className="max-w-[600px] font-light text-[16px]">
          {user?.resume.map((resume) => <p>{resume.body}</p>)}
        </p>

        <div className="">
          <Contacts />
        </div>
      </div>
    </div>
  );
};
