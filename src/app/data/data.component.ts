import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['data.component.less']
})
export class DataComponent implements OnInit {


  constructor() { }
  private  startDate;
  private TodayDate;


  ngOnInit() {
    this.startDate = new Date();
    this.TodayDate = new Date();
  }
  getLeft(e){
    console.log(e)

  }
  getRight(e){
    console.log(e)
  }

}
