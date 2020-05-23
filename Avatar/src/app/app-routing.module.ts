import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinationComponent } from './destination/destination.component';
import { AvatarWorldComponent } from './avatar-world/avatar-world.component';


const routes: Routes = [
  {path: '', component: AvatarWorldComponent},
  {path: 'destination/:_id', component: DestinationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
