import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: './pages/admin-manage/admin-manage.module#AdminManageModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    data: {
        breadcrumb: 'Login',
        status: false
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
