import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Identification } from '../interfaces/identification';
import { MatDialog } from '@angular/material';
import { ConnexionService } from '../services/connexion.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  connexionForm: FormGroup;
  user : Array<any>;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public firebaseService: FirebaseService,
    public conne:ConnexionService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.connexionForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  resetFields(){
    this.connexionForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit(value){
    this.firebaseService.connect(value).subscribe(
      result => {
        this.user = result;
        console.log("tentative d'authentification");
        if(this.user.length>0){
          this.conne.connecte = true;
          this.conne.role=this.user[0].payload.doc.data().role;
          this.conne.userId=this.user[0].payload.doc.id;
          console.log("utilisateur authentifié, role:"+this.conne.role+"userID:"+this.conne.userId);
        }
      }
    )
  }
}
