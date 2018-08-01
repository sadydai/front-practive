import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { DataComponent } from './data.component';
import { DatepickerModule } from '../component/datepicker/datepicker.module';
import {DatepickerModules} from  '../component/datepicker-test/datepicker.module'

@NgModule({
  imports: [
    CommonModule,
    DataRoutingModule,
    DatepickerModule,
    DatepickerModules

  ],
  declarations: [DataComponent]
})
export class DataModule { }
