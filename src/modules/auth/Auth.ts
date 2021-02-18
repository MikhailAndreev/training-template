export interface ILoginValues {
  email: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
}

export interface IRegisterValues extends ILoginValues {
  name: string;
}

export interface IRegisterResponse extends ILoginResponse {
  user: {
    active: boolean;
    name: string;
    email: string;
  };
}
