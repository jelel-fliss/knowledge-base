import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserInterfaceRoutes } from './user-interface-routing.module';

import { UserInterfaceComponent } from './user-interface.component';

import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { HomepageComponent } from '../user-interface/homepage/homepage.component';
import { SettingspageComponent } from '../user-interface/settingspage/settingspage.component';
import { PostIssueComponent } from '../user-interface/post-issue/post-issue.component';
import { AvaxipediaComponent } from '../user-interface/avaxipedia/avaxipedia.component';
import { RouterModule } from '@angular/router';
import { ProblemPageComponent } from './problem-page/problem-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from '../services/auth-guard.service';
import { JWTInterceptorService } from '../services/jwt-interceptor.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsComponent } from './notifications/notifications.component';
import { AppModule } from '../app.module';


@NgModule({
  declarations: [
    UserInterfaceComponent,
    SidebarComponent,
    NavbarComponent,
    HomepageComponent,
    SettingspageComponent,
    PostIssueComponent,
    AvaxipediaComponent,
    ProblemPageComponent,
    UserProfileComponent,
    NotificationsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(UserInterfaceRoutes),
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptorService, multi: true}],
  bootstrap: [UserInterfaceComponent]
})
export class UserInterfaceModule { }
