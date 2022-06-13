import { Genre } from "./genre.model";

export interface Movie{
    id ?:  number;
    title : string;
    description : string;
    releaseDate : Date;
    genres : Genre[];
    ref: string;

}