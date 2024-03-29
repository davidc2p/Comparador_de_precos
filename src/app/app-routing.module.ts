import { AutoGeneratedComponent } from '@src/app/auto-generated/auto-generated.component';
import { SupermarketComponent } from './supermarket/supermarket.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'supermercado',
    component: SupermarketComponent,
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
