import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductFormComponent } from './components/product-form/product-form.component';
import { TableComponent } from './components/table/table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';

import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [ProductFormComponent, NavComponent, TableComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
