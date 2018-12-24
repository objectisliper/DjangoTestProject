import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardsComponent } from './dashboards/dashboards.component';
import {AdminManageRoutingModule} from './admin-manage-routing.module';
import { AdminComponent } from '../../layout/admin/admin.component';
import {FormsModule} from '@angular/forms';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    DashboardsComponent,
    AdminComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    AdminManageRoutingModule,
    FormsModule
  ]
})
export class AdminManageModule { }
