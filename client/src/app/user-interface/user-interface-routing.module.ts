import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SettingspageComponent } from './settingspage/settingspage.component';
import { PostIssueComponent } from './post-issue/post-issue.component';

import { UserInterfaceComponent } from './user-interface.component';
import { ProblemPageComponent } from './problem-page/problem-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from '../services/auth-guard.service';
import { CompanypediaComponent } from './companypedia/companypedia.component';


export const UserInterfaceRoutes: Routes = [
  {
    path: 'dashboard',
    component: UserInterfaceComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      { path: 'Home', component: HomepageComponent},
      { path: 'Settings', component: SettingspageComponent},
      { path: 'PostIssue', component: PostIssueComponent},
      { path: 'Avaxipedia', component: CompanypediaComponent},
      { path: 'Problem/:problemID', component: ProblemPageComponent},
      { path: 'User/:userID', component: UserProfileComponent},

    ]
  }
];

