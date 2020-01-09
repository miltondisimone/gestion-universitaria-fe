import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PAGES_ROUTES } from './pages.routes';
import { LayoutsModule } from '../layouts/layouts.module';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagePipe } from '../pipes/image/image.pipe';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [PagesComponent, DashboardComponent, ProfileComponent],
  imports: [
    CommonModule,
    LayoutsModule,
    PAGES_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports: [DashboardComponent, ImagePipe]
})
export class PagesModule { }
