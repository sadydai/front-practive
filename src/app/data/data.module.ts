import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { DataComponent } from './data.component';
import { DatepickerModule } from '../component/datepicker/datepicker.module';
import { PaginationModule } from '../component/pagination/pagination.module';
import { RadioModule } from '../component/radio/radio.module';

@NgModule({
  imports: [
    CommonModule,
    DataRoutingModule,
    DatepickerModule,
    PaginationModule,
    RadioModule

  ],
  declarations: [DataComponent]
})
export class DataModule { }
