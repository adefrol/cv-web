import { PageTitle } from "@/components/PageTitle";
import { SidebarLayout } from "@/components/layouts/SidebarLayout";
import { Development } from "@/components/resume/Development";
import { Education } from "@/components/resume/Education";
import { Experience } from "@/components/resume/Experience";
import { Hobby } from "@/components/resume/Hobby";
import { useSwitchUser } from "@/context/SwitchUserContext";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/resume/")({
  component: () => <Resume />,
});

const Resume = () => {
  const { user } = useSwitchUser();
  const [focus, setFocus] = useState(1);

  const content = [
    {
      id: 1,
      content: <Experience user={user!} />,
    },

    {
      id: 2,
      content: <Education user={user!} />,
    },

    {
      id: 3,
      content: <Development user={user!} />,
    },

    {
      id: 4,
      content: <Hobby user={user!} />,
    },
  ];

  return (
    <div className="">
      <SidebarLayout focus={focus} setFocus={setFocus}>
        {content[focus - 1].content}
      </SidebarLayout>
    </div>
  );
};
