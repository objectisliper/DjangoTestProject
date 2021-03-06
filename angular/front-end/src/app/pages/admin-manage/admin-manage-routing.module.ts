import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {DashboardsComponent} from './dashboards/dashboards.component';
import {AdminComponent} from '../../layout/admin/admin.component';
import {SettingsComponent} from './settings/settings.component';
import {DashboardListComponent} from './dashboard-list/dashboard-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
        {
          path: '',
          redirectTo: 'dashboards',
          pathMatch: 'full',
        },
        {
          path: 'dashboards',
          component: DashboardsComponent,
          pathMatch: 'full',
        },
        {
          path: 'settings',
          component: SettingsComponent,
          pathMatch: 'full',
        },
        {
          path: 'dashboard-list/:token',
          component: DashboardListComponent,
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminManageRoutingModule { }
