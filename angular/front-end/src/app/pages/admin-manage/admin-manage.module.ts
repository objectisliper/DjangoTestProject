import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardsComponent } from './dashboards/dashboards.component';
import {AdminManageRoutingModule} from './admin-manage-routing.module';
import { AdminComponent } from '../../layout/admin/admin.component';
import {FormsModule} from '@angular/forms';
import { SettingsComponent } from './settings/settings.component';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DashboardsComponent,
    AdminComponent,
    SettingsComponent,
    DashboardListComponent
  ],
  imports: [
    CommonModule,
    AdminManageRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class AdminManageModule { }
