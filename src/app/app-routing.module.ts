import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { HomeComponent } from './home/home.component';
import { adminGuard } from './guards/admin.guard';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'first',component:FirstChildComponent,canActivate:[adminGuard] },
  { path:'about/:id',component:AboutComponent },
  //{ path:'about/:id',redirectTo:'second',pathMatch:'full' },
  { path:'second',children:[{path:'products',component:ProductsComponent},{path:'contact',component:ContactComponent}] },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
