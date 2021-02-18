export interface ILoginValues {
  email: string;
  password: string;
}

export interface IRegisterValues extends ILoginValues {
  name: string;
}
