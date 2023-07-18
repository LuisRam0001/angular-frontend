import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginForm: FormGroup = this.fb.group({
  email:[
    '',  // valor predeterminado del campo
  [
    Validators.required,
    Validators.email
  ]     //validaciones
  ],
  password: [
    '',
    [
      Validators.required,
      Validators.minLength( 8 )
    ]
  ]
});

// inyeccion de dependencias

  constructor(private fb :  FormBuilder) {}


  /*  metodos: login */
  login(){
    console.group('loginForm');
    console.info(this.loginForm.value);
    console.log(this.loginForm.value);
    console.groupEnd();

  }
}
