import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardsComponent } from './dashboards/dashboards.component';
import {AdminManageRoutingModule} from './admin-manage-routing.module';
import { AdminComponent } from '../../layout/admin/admin.component';

@NgModule({
  declarations: [DashboardsComponent,
    AdminComponent],
  imports: [
    CommonModule,
    AdminManageRoutingModule,
  ]
})
export class AdminManageModule { }
