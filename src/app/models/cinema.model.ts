import { Address } from "./address.model";

export interface Cinema{
    id ?:  number;
    name? : string;
    dateCreation? : Date;
    phoneNumber?: string;
    active? : boolean ;
    address?: Address
    
}