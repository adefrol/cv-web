import { PageTitle } from "@/components/PageTitle";
import { projects } from "@/lib/projects";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/$projectId")({
  component: () => <ProjectById />,
  loader: ({ params }) => {
    return projects.find((project) => project.id === Number(params.projectId));
  },
});

const ProjectById = () => {
  const data = Route.useLoaderData();

  return (
    <div className="">
      <PageTitle title={data?.title || "Проект"} />

      <div className="mt-[50px]">
        <img src={data?.img} alt="" />
      </div>
    </div>
  );
};
