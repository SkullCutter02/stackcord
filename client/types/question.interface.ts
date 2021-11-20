import Base from "./base.interface";
import IUser from "./user.interface";
import IAnswer from "./answer.interface";

export default interface IQuestion extends Base {
  title: string;
  body: string;
  whiteboard?: string;
  answered: boolean;
  user: IUser;
  answers: IAnswer[];
}
