import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { Approutes } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login/login.component';
import { RouterModule } from '@angular/router';
import { UserInterfaceModule } from './user-interface/user-interface.module';

import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    UserInterfaceModule,
    BrowserModule,
    RouterModule.forRoot(Approutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
