import { PageTitle } from "@/components/PageTitle";
import { IMAGE_URL } from "@/constants/images";
import { useSwitchUser } from "@/context/SwitchUserContext";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
  component: () => <Projects />,
});

const Projects = () => {
  const { user } = useSwitchUser();

  return (
    <>
      <PageTitle title="Проекты" />

      <div className="">
        <div className="">
          {user?.resume.map((resume) =>
            resume.projects.length ? (
              resume.projects.map((project) => (
                <div className="" key={project.id}>
                  <p className="">{project.title}</p>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center" key={resume.id}>
                <img src={IMAGE_URL[404]} className="h-screen" alt="" />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};
