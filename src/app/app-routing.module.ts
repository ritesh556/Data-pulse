import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';

import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { RiteshComponent } from './ritesh/ritesh.component';
import { UserComponent } from './user/user.component';




const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path:'main',component:RiteshComponent},

  { path: 'create', component: CreateComponent },
  { path: 'read', component:ReadComponent},
  { path: 'create/:id', component: CreateComponent },
  {path: 'user', component:UserComponent},
  {path:'Aboutus',component:AboutUsComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
