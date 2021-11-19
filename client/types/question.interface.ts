import Base from "./base.interface";
import IUser from "./user.interface";

export default interface IQuestion extends Base {
  title: string;
  body: string;
  whiteboard?: string;
  answered: boolean;
  user: IUser;
}
