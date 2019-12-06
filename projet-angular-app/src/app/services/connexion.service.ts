import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  connecte:boolean;
  role:Number;
  userId:String;

  constructor() {
    this.connecte=false;
    this.role=0;
    this.userId='';
   }
}
