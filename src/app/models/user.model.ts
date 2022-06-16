import { Cart } from "./cart.models";

export interface User{
    id ?:  number;
    lastname : string;
    firstname : string;
    email : string;
    phoneNumber : string;
    username : string;
    password: string;
    active : boolean;
    roles : [string];
    token?: string
    carts : Cart[]
}