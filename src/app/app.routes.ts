import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AnonymousGuard } from './services/guards/anonymous.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AnonymousGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [AnonymousGuard]},
  { path: '**', component: PageNotFoundComponent},
 ];

export const APP_ROUTES = RouterModule.forRoot(routes, {useHash: true});

