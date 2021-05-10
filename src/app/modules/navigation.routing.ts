import { Routes } from '@angular/router';
import { RegisterFromComponent } from './auth/auth-from/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardSenzorComponent } from './dashboard/dashboard-senzor/dashboard-senzor.component';
import { ToolbarComponent } from './toolbar.component';
import { PostComponent } from './user/post/post.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserDisplayComponent } from './user/user-display/user-display.component';

const navigation: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/navigation',
  },
  {
    path: 'navigation',
    component: ToolbarComponent,
    children: [
      {
        path: '',
        component: PostComponent,
      },
      {
        path: 'register',
        component: RegisterFromComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'profile/:id',
        component: ProfileComponent,
      },
      {
        path: 'users',
        component: UserDisplayComponent,
      },
      {
        path: 'senzors',
        component: DashboardSenzorComponent,
      },
    ],
  },
];

export default navigation;
