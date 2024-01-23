import { Observable } from "rxjs/internal/Observable";

export class UserLogin
{

    userLoginId:number;
    userLoginMail:string;
    userLoginPass:string;

    constructor()
    {
        this.userLoginId=0;
        this.userLoginMail="";
        this.userLoginPass="";
    }
   
}