import Base from "./base.interface";

export default interface IHall extends Base {
  name: string;
  code: string;
  anonymous: boolean;
  role: string;
}
