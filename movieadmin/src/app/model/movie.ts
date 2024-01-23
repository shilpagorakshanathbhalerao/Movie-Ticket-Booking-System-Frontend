import { Observable } from "rxjs/internal/Observable";
import { Show } from "./show";

export class Movie
{

    movieId:number;
    movieName:string;
    durationTime:string;
    movieRate:number;
    movieCast:string;
    shows:Show[]

    constructor()
    {
        this.movieId=0;
        this.movieName="";
        this.durationTime="";
        this.movieRate=0;
        this.movieCast="";
        this.shows=[];
    }
   
}