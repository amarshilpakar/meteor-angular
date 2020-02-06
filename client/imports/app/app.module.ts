import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },

      {
        path: 'register',
        component: RegisterComponent
      },

      {
        path: 'home',
        component: HomeComponent
      },

      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      
      {
        path: '**',
        component: LoginComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
