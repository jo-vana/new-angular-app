import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example-component/example-component.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material UI modules
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
// Custom modules
import { LoginComponent } from './components/login/login.component';
import {LayoutModule} from '@angular/cdk/layout';
import { LoginPage } from './pages/login-page/login-page.component';
import { ProfilePage } from './pages/profile-page/profile-page.component';
import { SignUpPage } from './pages/sign-up-page/sign-up-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    LoginComponent,
    LoginPage,
    ProfilePage,
    SignUpPage,
    SignUpComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
