import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrl: './validations.component.scss'
})
export class ValidationsComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient){
    this.validate();
    this.getData();
  }

  validate(){
    this.loginForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
      }),
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
    }
    else{
      alert('invalid data')
    }
  }

  users: any[] = [];
  headings: any[] = [];

  u: any[] = [
    {
      id: 1,
      name: "Jaleed"
    },
    {
      id: 2,
      name: "Syed"
    },
    {
      id: 3,
      name: "Ahmed"
    },{
      id: 4,
      name: "Ok"
    }
  ]
  getData(){
    this.http.get<any>("https://dummyjson.com/users").subscribe(
      (response) => {
        this.users = response.users;
        console.log(this.users);
        for(let details of this.users){
          this.headings = Object.keys(details)
          console.log(this.headings)
        }
        // console.log(this.u);
        // for(let )
        
      },
      (error) => {
        console.error(error); 
      }
    )
  }

}
