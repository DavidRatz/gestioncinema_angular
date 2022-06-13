import { Genre } from "./genre.model";

export interface Cinema{
    id ?:  number;
    name : string;
    dateCreation : Date;
    phoneNumber: string;
    active : boolean;
    uuid : string;
}