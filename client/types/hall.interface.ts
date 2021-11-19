import Base from "./base.interface";
import IUser from "./user.interface";

export default interface IHall extends Base {
  name: string;
  code: string;
  anonymous: boolean;
  role: string;
  users: IUser[];
}
