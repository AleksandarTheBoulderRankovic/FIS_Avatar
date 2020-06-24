import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinationComponent } from './destination/destination.component';
import { AvatarWorldComponent } from './avatar-world/avatar-world.component';
import { SignupParentComponent } from './signup-parent/signup-parent.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '', component: AvatarWorldComponent},
  {path: 'destination/:_id', component: DestinationComponent},
  {path: 'sign-up', component: SignupParentComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
