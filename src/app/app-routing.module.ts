import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {pagesRoutes} from '../app/pages/pages.routes';


const routes: Routes = [ ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
