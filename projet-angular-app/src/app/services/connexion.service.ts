import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  connecte:boolean;
  form_send:boolean;
  user: Array<any>;
  role:Number;
  userId:String;
  userOption:String;

  constructor() {
    this.connecte=false;
    this.form_send=false;
    this.user=[];
    this.role=0;
    this.userId='';
    this.userOption='imsi'; //pour le dev, bug avec les profs
   }
}
