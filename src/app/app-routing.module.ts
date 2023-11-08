import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './components/example-component/example-component.component';
import { LoginPage } from './pages/login-page/login-page.component';
import { ProfilePage } from './pages/profile-page/profile-page.component';
import { SignUpPage } from './pages/sign-up-page/sign-up-page.component';

const routes: Routes = [
  {path: 'users', component: ExampleComponent},
  {path: 'login', component: LoginPage},
  {path: 'sign-up', component: SignUpPage},
  {path: 'profile', component: ProfilePage},
  {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
