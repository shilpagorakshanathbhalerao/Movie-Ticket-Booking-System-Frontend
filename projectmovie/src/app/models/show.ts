import { Observable } from "rxjs/internal/Observable";

export class Show
{

    showId:number;
    showName:string;
    paymentType:string;
    platiniumPrice:number;
    silverPrice:number;
    goldPrice:number;


    constructor()
    {
        this.showId=0;
        this.showName="";
        this.paymentType="";
        this.platiniumPrice=0;
        this.silverPrice=0;
        this.goldPrice=0;
    }
   
}