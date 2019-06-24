import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { BComponent } from './b/b.component';
import { RtypeComponent } from './rtype/rtype.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { RrtComponent } from './rrt/rrt.component';
import { PayComponent } from './pay/pay.component';

const routes: Routes = [

{path:"",component:LoginComponent },
{path:"register",component:RegisterComponent},
{path:"b",component:BComponent},
{path:"gallery",component:GalleryComponent},
{path:"rtype",component:RtypeComponent},
{path:"contact",component:ContactComponent},
{path:"rrt",component:RrtComponent},
{path:"pay",component:PayComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
