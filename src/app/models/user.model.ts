export interface User{
    id ?:  number;
    lastName : string;
    firstName : string;
    email : string;
    phoneNumber : string;
    username : string;
    password: string;
    active : boolean;
    token?: string
}