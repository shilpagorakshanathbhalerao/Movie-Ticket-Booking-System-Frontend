import { Observable } from "rxjs/internal/Observable";

export class User
{

    userId:number;
    userName:string;
    userEmail:string;
    userPassword:string;
    userMobNo:number;
    userLastName:string;

    constructor()
    {
        this.userId=0;
        this.userName="";
        this.userEmail="";
        this.userPassword="";
        this.userMobNo=0;
        this.userLastName="";
        
    }
   
}