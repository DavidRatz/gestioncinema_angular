import { Cinema } from "./cinema.model";
import { Movie } from "./movie.model";
import { Room } from "./room.model";

export interface Research{
    ref: string;
    movieDTO : Movie;
    roomDTO : Room;
    theaterDTO : Cinema;
    
    date : Date;

}