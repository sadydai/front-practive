/**
 * radio 单选框和复选框
 * 1： style 样式
 * 2： 父组件事件返回控制 是否选择
 * 3： props：title ， isCheck, eventCheckHandle
 *
 * **/

import { Component, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.less']
})
export class RadioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Isdisable: boolean;
  @Input() label: any;
  @Input() groupName: string;
  @Input() disabled: boolean;
}
