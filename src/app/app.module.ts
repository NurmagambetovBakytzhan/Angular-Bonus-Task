import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClient} from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { DataListComponent } from './components/data-list/data-list.component';

@NgModule({
    declarations: [
      AppComponent,
      LoginComponent,
      RegisterComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule, 
      HttpClient,
      RouterModule.forRoot([
        {path: 'data-list', component: DataListComponent},
        {path: 'login', component: LoginComponent},
        {path: 'registration', component: RegisterComponent},
        {path: '', redirectTo: 'login', pathMatch: 'full'},
      ])
    ],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}
  