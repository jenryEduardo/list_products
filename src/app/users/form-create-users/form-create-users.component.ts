import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-create-users',
  templateUrl: './form-create-users.component.html',
  styleUrl: './form-create-users.component.css'
})
export class FormCreateUsersComponent {
  loginForm: FormGroup;

  constructor(private FormBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      const userData = JSON.parse(savedUserData);

      // Comprobar si las credenciales son correctas
      if (userData.email === this.loginForm.value.email && userData.password === this.loginForm.value.password) {
      this.router.navigate(['/main'])
        console.log('Credenciales incorrectas');
      }
    } else {
      console.log('No hay un usuario registrado');
    }
  }
}
