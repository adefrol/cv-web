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
        <PageTitle title="Главная" />

        <p className="max-w-[600px] font-semibold text-[24px]">
          {/* {user?.resume.map((item) => item.title)} */}
          Illumed - команда экспертов в разработке сайтов и мобильных
          приложений.
        </p>

        <p className="max-w-[600px] font-light text-[16px] text-justify">
          {/* {user?.resume.map((resume) => resume.body)} */}
          <b>Iillumed</b> - команда, специализирующаяся на создании
          инновационных веб-сайтов и мобильных приложений. Мы опытные
          веб-разработчики, обладают устойчивыми знаниями и более чем
          четырёхлетним практическим опытом. Владеем глубокими знаниями в
          серверной и клиентской частях веб-технологий, сфокусированных на
          фреймворках основанных на JavaScript/TypeScript и других языках. Наш
          опыт включает успешное завершение различных проектов, что подтверждает
          способность к креативному мышлению и решению сложных задач. Мы
          стремится к постоянному профессиональному росту и поиску новых
          способов совершенствования навыков в веб-разработке.
          {/* Наш энтузиазм и опыт станут незаменимым
          вкладом в наши инновационные проекты." */}
        </p>

        <div className="">
          <Contacts />
        </div>
      </div>
    </div>
  );
};
