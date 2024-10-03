import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrl: './form-users.component.css'
})
export class FormUsersComponent {

  registerForm: FormGroup;

  constructor (private formBuilder: FormBuilder){
    this.registerForm=this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  } 

  onSubmit() {
    if (this.registerForm.valid) {
      // Guardar los datos en localStorage
      localStorage.setItem('userData', JSON.stringify(this.registerForm.value));
      console.log('Usuario registrado y guardado en localStorage');

    }
  }

  onRegister() {
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      console.log('El usuario ya está registrado');
    } else {
      // Si no está registrado, registrar al usuario y guardar los datos
      localStorage.setItem('userData', JSON.stringify(this.registerForm.value));
      console.log('Usuario registrado exitosamente');
    }
  }


}
