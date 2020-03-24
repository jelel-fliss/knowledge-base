import { NgModule } from '@angular/core';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';



export const Approutes: Routes = [
  { path: '' , redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: UserInterfaceComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
