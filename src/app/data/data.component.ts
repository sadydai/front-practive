import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-data',
    templateUrl: './data.component.html',
    styleUrls: ['data.component.less']
})
export class DataComponent implements OnInit {


    constructor() {
    }

    startDate;
    TodayDate;
    pagetotal;
    currentpage: number;


    ngOnInit() {
        this.startDate = new Date();
        this.TodayDate = new Date();
        this.pagetotal = 5;
        this.currentpage = 1;
    }

    getLeft(e) {
        console.log(e);

    }

    getRight(e) {
        console.log(e);
    }

    handlePageChange(e) {
        console.log(e);
        this.currentpage = e;
    }

    setpage(t) {
        this.pagetotal = t;
        this.currentpage = 1;
    }

}
