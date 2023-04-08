import { IUser } from "../interfaces/auth-types";

export class UserDto {
    email: string;
    id: number | undefined;
    firstName: string;
    lastName: string

    constructor(model: IUser) {
        this.email = model.email;
        this.id = model.id;
        this.firstName = model.firstName;
        this.lastName = model.lastName
    }
}