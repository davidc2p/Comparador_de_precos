import { ProductComponent } from './product/product.component';
import { AutoGeneratedComponent } from './auto-generated/auto-generated.component';
import { SupermarketComponent } from './supermarket/supermarket.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { LinkguardService } from './services/linkguard.service';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'registar',
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'supermercado',
    component: SupermarketComponent,
    canActivate: [LinkguardService],
    pathMatch: 'full'
  },
  {
    path: 'produto',
    component: ProductComponent,
    pathMatch: 'full'
  },
  {
    path: 'gen',
    component: AutoGeneratedComponent,
    pathMatch: 'full'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
