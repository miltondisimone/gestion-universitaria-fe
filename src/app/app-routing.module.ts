import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { PAGES_ROUTES } from './pages/pages.routes';


@NgModule({
  imports: [ PAGES_ROUTES, APP_ROUTES],
  exports: [RouterModule]
})
export class AppRoutingModule { }
