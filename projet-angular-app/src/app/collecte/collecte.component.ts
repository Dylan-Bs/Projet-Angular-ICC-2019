import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { FirebaseService } from '../services/firebase.service';
import { ConnexionService } from '../services/connexion.service';

export interface option {
  value: string;
  viewValue: string;
}

export interface optionsIng3Group {
  disabled?: boolean;
  name: string;
  option: option[];
}

@Component({
  selector: 'app-collecte',
  templateUrl: './collecte.component.html',
  styleUrls: ['./collecte.component.scss']
})
export class CollecteComponent implements OnInit {

  exampleForm: FormGroup;

  optionsIng3Groups: optionsIng3Group[] = [
    {
      name: 'Pau',
      option: [
        {value: 'icc', viewValue: 'Ingénierie Cloud Computing'},
        {value: 'iapau', viewValue: 'Intelligence Artificielle'},
        {value: 'imsi', viewValue: 'Ingénierie Mathématique et Simulation Numérique'},
      ]
    },
    {
      name: 'Cergy',
      option: [
        {value: 'inem', viewValue: 'Informatique Embarquée'},
        {value: 'iacergy', viewValue: 'Intelligence Artificielle'},
        {value: 'vc', viewValue: 'Visual Computing'},
        {value: 'fintech', viewValue: 'Finance et Technologie'},
      ]
    },
  ];
  

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  validation_messages = {
   'name': [
     { type: 'required', message: 'Name is required.' }
   ],
   'surname': [
     { type: 'required', message: 'Surname is required.' }
   ],
   'promo': [
     { type: 'required', message: 'Promo is required. Between 2000 and 2100' },
   ]
 };

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public firebaseService: FirebaseService,
    public conne:ConnexionService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ],
      name: ['', Validators.required ],
      surname: ['', Validators.required ],
      promo: ['', Validators.required ],
      optionsIng3Control: ['', Validators.required ],
      entreprise: ['', Validators.required ],
      ville: ['', Validators.required ],
      salaire: ['', Validators.required ],
      autorisationCollecte: ['', Validators.required ]
    });
  }


  resetFields(){
    this.exampleForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      promo: new FormControl('', Validators.required),
      optionsIng3Control: new FormControl('', Validators.required),
      entreprise: new FormControl('', Validators.required),
      ville: new FormControl('', Validators.required),
      salaire: new FormControl('', Validators.required),
      autorisationCollecte: new FormControl('', Validators.required)
    });
  }


  onSubmit(value){
    console.log(value)
    this.firebaseService.createUser(value)
    .then(
      res => {
        this.resetFields();
        // this.router.navigate(['/']);
        this.conne.connecte = true
        this.conne.role = 0
        console.log("utilisateur connecté");
      }
    )
  }

}
