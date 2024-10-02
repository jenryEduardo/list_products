import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './users/main/main.component';
import { FormUsersComponent } from './users/form-users/form-users.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'form',component:FormUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
