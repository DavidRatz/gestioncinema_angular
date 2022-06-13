import { Cinema } from "./cinema.model";

export interface Room{
    id ?:  number;
    ref : string;
    number : number;
    numberSeats : number;
    active : boolean;
    theater : Cinema
}