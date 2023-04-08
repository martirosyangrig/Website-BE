export interface IUser {
    id?: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    verified: boolean
}

export interface IUserRegister {
    email: string;
    password: string;
    firstName: string;
    lastName: string
}

export interface IUserLogin {
    email: string;
    password: string
}