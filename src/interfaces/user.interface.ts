import { IContact } from "./contact.interface"
import { IResume } from "./resume.interface"

export interface IUser {
  id: number;
  name: string;
  lastname: string;
  patronymic: string;
  img: string;
  alt: string;
  resume: IResume[];
  contact: IContact[];
}