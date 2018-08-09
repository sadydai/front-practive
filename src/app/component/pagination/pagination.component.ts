/**
 分页测试
 1： total 总页数
 2：if total <=5  展示前5页
 3: if total >5 展示前5页 + '...' + 最后一页
 4： ... 不能点击
 5： if currentPage>= 6 展示： firstPage + '...'  + + '...' + lastPage
 6: totalPageCount : 最大页数
 **/

import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.less']
})
export class PaginationComponent implements OnInit {

    constructor() {
    }

    @Input() set total(page: number) {
        this.totalPageCount = page;
    }

    @Input() set current(page: number) {
        this.currentPage = page;
    }

    currentPage: number;
    pageList: any = [];
    totalPageCount: number;
    leftDisable = false;
    rightDisable = false;
    @Output() pageChange = new EventEmitter();


    ngOnInit() {
        this.pageList = this.calcPageList(this.currentPage);
    }

    calcPageList(current) {
        const pageList = [];
        if (this.totalPageCount > 5) {
            let left = Math.max(2, current - 2);
            let right = Math.min(current + 2, this.totalPageCount - 1);
            if (current - 1 < 2) {
                right = 4;
            }
            if (this.totalPageCount - current < 2) {
                left = this.totalPageCount - 3;
            }

            for (let i = left; i <= right; i++) {
                pageList.push(i);
            }
        } else {
            for (let i = 2; i < this.totalPageCount; i++) {
                pageList.push(i);
            }
        }
        this.iconIsDisabled();
        this.pageChange.emit(this.currentPage);
        return pageList;
    }

    handleClick(page) {
        if (typeof page === 'number') {
            if (this.currentPage === page) {
                return;
            }
            this.currentPage = page;
            this.pageList = this.calcPageList(page);
        } else {
            switch (page) {
                case 'back':
                    this.currentPage = Math.max(1, this.currentPage - 1);
                    this.pageList = this.calcPageList(this.currentPage);
                    break;
                case 'forward':
                    this.currentPage = Math.min(this.totalPageCount, this.currentPage + 1);
                    this.pageList = this.calcPageList(this.currentPage);
                    break;
            }
        }

    }

    iconIsDisabled() {
        this.leftDisable = this.currentPage === 1;
        this.rightDisable = this.currentPage === this.totalPageCount;
    }

}
