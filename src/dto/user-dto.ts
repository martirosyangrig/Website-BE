import { User } from "../entity/user/user-entity";

export class UserDto {
    email: string;
    id: number | undefined;
    firstName: string;
    lastName: string;

    constructor(model: User) {
        this.email = model.email;
        this.id = model.id;
        this.firstName = model.firstName;
        this.lastName = model.lastName
    }
}