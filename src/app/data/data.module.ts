import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { DataComponent } from './data.component';
import { DatepickerModule } from '../component/datepicker/datepicker.module';

@NgModule({
  imports: [
    CommonModule,
    DataRoutingModule,
    DatepickerModule

  ],
  declarations: [DataComponent]
})
export class DataModule { }
