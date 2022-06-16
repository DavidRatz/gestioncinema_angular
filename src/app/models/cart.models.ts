import { User } from "./user.model";

export interface Cart{
    ref: string;
    quantity: number;
    price : number;
    refSeance : string;
    user : User;
    
}