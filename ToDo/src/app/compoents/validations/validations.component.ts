import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrl: './validations.component.scss'
})
export class ValidationsComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.validate();
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

}
