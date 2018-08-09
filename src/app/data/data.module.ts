import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { DataComponent } from './data.component';
import { DatepickerModule } from '../component/datepicker/datepicker.module';
import { PaginationModule } from '../component/pagination/pagination.module';

@NgModule({
  imports: [
    CommonModule,
    DataRoutingModule,
    DatepickerModule,
    PaginationModule

  ],
  declarations: [DataComponent]
})
export class DataModule { }
