import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PAGES_ROUTES } from './pages.routes';
import { LayoutsModule } from '../layouts/layouts.module';



@NgModule({
  declarations: [PagesComponent, DashboardComponent],
  imports: [
    CommonModule,
    LayoutsModule,
    PAGES_ROUTES
  ],
  exports: [DashboardComponent]
})
export class PagesModule { }
