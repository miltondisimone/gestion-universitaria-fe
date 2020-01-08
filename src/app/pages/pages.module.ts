import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PAGES_ROUTES } from './pages.routes';
import { LayoutsModule } from '../layouts/layouts.module';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagePipe } from '../pipes/image.pipe';



@NgModule({
  declarations: [PagesComponent, DashboardComponent, ProfileComponent, ImagePipe],
  imports: [
    CommonModule,
    LayoutsModule,
    PAGES_ROUTES,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [DashboardComponent]
})
export class PagesModule { }
