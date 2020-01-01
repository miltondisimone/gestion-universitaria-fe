import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { pagesRoutes } from './pages.routes';
import { LayoutsModule } from '../layouts/layouts.module';



@NgModule({
  declarations: [PagesComponent, DashboardComponent],
  imports: [
    CommonModule,
    LayoutsModule,
    RouterModule.forChild(pagesRoutes)
  ],
  exports: []
})
export class PagesModule { }
