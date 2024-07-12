import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './user/hello-world/hello-world.component';
import { UserComponent } from '../user/user.component';

const routes: Routes = [
  { path: 'hello-world', component: HelloWorldComponent },
  { path: 'user', component: UserComponent },
  { path: '', redirectTo: '/hello-world', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
