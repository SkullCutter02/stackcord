import Base from "./base.interface";
import IUser from "./user.interface";
import IQuestion from "./question.interface";

export default interface IAnswer extends Base {
  body: string;
  whiteboard?: string;
  user: IUser;
  question: IQuestion;
}
