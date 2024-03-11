import { IProject } from "./project.interface";
import { IDevelopment } from "./resume/development.interface";
import { IEducation } from "./resume/education.interface";
import { IExperience } from "./resume/experience.interface";
import { IHobby } from "./resume/hobby.interface";

export interface IResume {
  id: number;
  title: string;
  body: string
  experience: IExperience[];

  education: IEducation[]

  development: IDevelopment[]

  hobby: IHobby

  projects: IProject[]
}
