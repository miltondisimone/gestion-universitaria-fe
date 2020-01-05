import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PAGES_ROUTES } from './pages.routes';
import { LayoutsModule } from '../layouts/layouts.module';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [PagesComponent, DashboardComponent, ProfileComponent],
  imports: [
    CommonModule,
    LayoutsModule,
    PAGES_ROUTES
  ],
  exports: [DashboardComponent]
})
export class PagesModule { }
