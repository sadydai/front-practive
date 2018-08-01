/**
 * Created by daishuang on 2018/7/19.
 */
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DatepickerComponent } from './datepicker.component';

@NgModule({
    declarations: [ DatepickerComponent ],
    exports: [ DatepickerComponent ],
    imports: [ CommonModule, FormsModule ]
})
export class DatepickerModule { }
