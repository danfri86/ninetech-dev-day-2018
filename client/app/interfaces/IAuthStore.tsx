import IUser from "./IUser";

export default interface IAuthStore {
  user: IUser;
  submitForm(route: string, data: object): void;
};
