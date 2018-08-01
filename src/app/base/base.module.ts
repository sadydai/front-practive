import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';

import { BaseComponent } from './base.component';

@NgModule({
  imports: [
    CommonModule,
    BaseRoutingModule
  ],
  declarations: [BaseComponent]
})
export class BaseModule { }
