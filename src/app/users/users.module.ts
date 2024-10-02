import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarUsersComponent } from './navbar-users/navbar-users.component';
import { FormUsersComponent } from './form-users/form-users.component';
import { FormCreateUsersComponent } from './form-create-users/form-create-users.component';
import { MainComponent } from './main/main.component';




@NgModule({
  declarations: [
    NavbarUsersComponent,
    FormUsersComponent,
    FormCreateUsersComponent,
    MainComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FormCreateUsersComponent,
    FormUsersComponent,
    MainComponent,
    NavbarUsersComponent
  ]
})
export class UsersModule { }
