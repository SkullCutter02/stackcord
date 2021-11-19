import Base from "./base.interface";

export default interface IQuestion extends Base {
  title: string;
  body: string;
  whiteboard?: string;
  answered: boolean;
}
