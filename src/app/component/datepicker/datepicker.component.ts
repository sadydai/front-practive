/**
 * Created by daishuang on 2018/7/19.
 */
import {
    Component, ElementRef, EventEmitter, Input, OnChanges,
    OnInit, Output, Renderer, SimpleChange, Renderer2, OnDestroy
} from '@angular/core';

import {animate, keyframes, style, transition, trigger, state} from '@angular/animations';

import {Calendar} from './calendar';


@Component({
    selector: 'app-datepicker-range',
    animations: [
        trigger('calendarAnimation', [
            transition('* => left', [
                animate(180, keyframes([
                    style({transform: 'translateX(105%)', offset: 0.5}),
                    style({transform: 'translateX(-130%)', offset: 0.51}),
                    style({transform: 'translateX(0)', offset: 1})
                ]))
            ]),
            transition('* => right', [
                animate(180, keyframes([
                    style({transform: 'translateX(-105%)', offset: 0.5}),
                    style({transform: 'translateX(130%)', offset: 0.51}),
                    style({transform: 'translateX(0)', offset: 1})
                ]))
            ])
        ])
    ],
    styles: [
        `.datepicker {
        position: relative;
        display: inline-block;
        color: #2b2b2b;
      }

      .datepicker__calendar {
        position: absolute;
        overflow: hidden;
        z-index: 1000;
        top: 38px;
        left: -8px;
        width: 20.5em;
        font-size: 14px;
        border-radius: 3px;
        background-color: #ffffff;
        box-shadow: 0 1px 3px 0 rgba(191,200,214,0.22), 0 2px 3px 0 rgba(191,200,214,0.13);
        cursor: default;
        -webkit-touch-callout: none;
          -webkit-user-select: none;
             -moz-user-select: none;
              -ms-user-select: none;
                  user-select: none;
      }
      .is_right {
        left: -8px;
        }
      .active-input {
        background-color: #4488ff !important;
        color: white !important;
      }

      .datepicker__calendar__cancel {
        position: absolute;
        bottom: 1em;
        left: 1.8em;
        color: #d8d8d8;
        cursor: pointer;
        -webkit-transition: 0.37s;
        transition: 0.37s;
      }

      .datepicker__calendar__cancel:hover {
        color: #b1b1b1;
      }

      .datepicker__calendar__content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-flow: wrap;
            flex-flow: wrap;
        -webkit-box-pack: center;
           -ms-flex-pack: center;
         justify-content: center;
        margin-top: 0.2em;
        margin-bottom: 1em;
      }

      .datepicker__calendar__label {
        display: inline-block;
        width: 2.2em;
        height: 2.2em;
        margin: 0.2em;
        line-height: 2.2em;
        text-align: center;
        color: #d8d8d8;
      }

      .datepicker__calendar__month {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-flow: wrap;
            flex-flow: wrap;
        -webkit-box-pack: center;
           -ms-flex-pack: center;
         justify-content: center;
      }

      .datepicker__calendar__month__day {
        display: inline-block;
        width: 2.2em;
        height: 2.2em;
        margin: 0.2em;
        line-height: 2.2em;
        text-align: center;
        -webkit-transition: 0.37s;
        transition: 0.37s;
        border-radius: 3px;
      }

      .datepicker__calendar__nav {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
           -ms-flex-pack: center;
         justify-content: center;
        -webkit-box-align: center;
           -ms-flex-align: center;
              align-items: center;
        height: 3em;
        background-color: #fff;
        border-bottom: 1px solid #e8e8e8;
      }
      .DateRangeInput-input-arrow{
           display: inline-block;
           margin: 0px 6px;
      }

      .datepicker__calendar__nav__arrow {
        width: 0.8em;
        /*height: 0.8em;*/
        cursor: pointer;
        -webkit-transition: 0.37s;
        transition: 0.37s;
      }

      .datepicker__calendar__nav__arrow:hover {
        -webkit-transform: scale(1.05);
                transform: scale(1.05);
      }

      .datepicker__calendar__nav__chevron {
        fill: #bbbbbb;
        -webkit-transition: 0.37s;
        transition: 0.37s;
      }

      .datepicker__calendar__nav__chevron:hover {
        fill: #2b2b2b;
      }

      .datepicker__calendar__nav__header {
        width: 11em;
        margin: 0 1em;
        text-align: center;
      }

      .datepicker__input {
        outline: none;
        border-radius: 3px;
        font-size: 14px;
        display: inline-block;
        width: 95px;
        border: none !important;
        color: #4488FF;
        padding: .2em .6em;
        cursor: pointer;
      }
    `
    ],
    templateUrl: './datepicker.component.html'
})
export class DatepickerComponent implements OnInit, OnChanges, OnDestroy {

    private dateVal: Date;
    private endVal: Date;
    private dateRightVal: Date;

    // two way bindings
    @Output() dateChange = new EventEmitter<Date>();
    @Output() dateRightChange = new EventEmitter<Date>();

    @Input()
    get date(): Date {
        return this.dateVal;
    }

    set date(val: Date) {
        this.dateVal = val;
        this.dateChange.emit(val);
    }

    @Input()
    set dateRight(val: Date) {
        if (this.dateRightVal !== val) {
            this.dateRightVal = val;
            this.dateRightChange.emit(val);
        }
    }

    get dateRight(): Date {
        return this.dateRightVal;
    }


    @Input() get enddate(): Date {
        return this.endVal;
    }

    set enddate(val: Date) {
        this.endVal = val;
    }

    // api bindings
    @Input() disabled: boolean;
    @Input() accentColor: string;
    @Input() altInputStyle: boolean;
    @Input() dateFormat: string;
    @Input() fontFamily: string;
    @Input() rangeStart: Date;
    @Input() rangeEnd: Date;
    // data
    @Input() placeholder = 'Select a date';
    @Input() inputText: string;
    @Input() inputTexts: string;
    @Input() endText: string;
    // view logic
    @Input() showCalendarLeft: boolean;
    @Input() showCalendarRight: boolean;
    @Input() rangeMonth: number;
    @Input() isSingle: boolean;

    // events
    @Output() Select = new EventEmitter<Date>();
    // time
    @Input() calendarDays: Array<number>;
    @Input() currentMonth: string;
    @Input() dayNames: Array<String>;
    @Input() hoveredDay: Date;
    calendar: Calendar;
    currentMonthNumber: number;
    currentYear: number;
    months: Array<string>;
    // animation
    animate: string;
    // colors
    colors: {[id: string]: string};
    // listeners
    clickListener: Function;
    rightDay: number;
    leftDay: number;


    constructor(private renderer: Renderer2, private elementRef: ElementRef) {
        this.dateFormat = 'YYYY-MM-DD';
        // view logic
        this.showCalendarRight = false;
        this.showCalendarLeft = false;

        // colors
        this.colors = {
            'black': '#333333',
            'blue': '#4488FF',
            'lightGrey': '#f1f1f1',
            'white': '#ffffff',
            'grey': '#ddd'
        };
        this.accentColor = this.colors['blue'];
        this.altInputStyle = false;
        // time
        this.calendar = new Calendar();
        this.dayNames = ['六', '一', '二', '三', '四', '五', '日'];
        this.months = [
            '1月', '2月', '3月', '4月', '5月', '6月', '7月',
            '8月', '9月', '10月', '11月', '12月'
        ];
        // listeners
        this.clickListener = renderer.listen('document', 'click', (event) => this.handleGlobalClick(event));
    }

    ngOnInit() {
        this.setDate();
        this.setRightDate();
    }

    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
        if ((changes['date'] || changes['dateRight'])) {
            this.setDate();
            this.setRightDate();
            this.rightDay = this.dateRight.getDate() || new Date().getDate();
            this.leftDay = this.date.getDate() || new Date().getDate();
        }
    }

    ngOnDestroy() {
        this.clickListener();
    }

    // State Management
    // ------------------------------------------------------------------------------------
    closeCalendar(): void {
        // 左侧
        this.showCalendarLeft = false;
        this.setDate();
        // 右侧
        // this.showCalendarRight = false;
        this.setRightDate();
    }

    private setCurrentValues(date: Date, rang: string) {
        if (rang === 'start') {
            this.currentMonthNumber = date.getMonth();
            this.currentMonth = this.months[this.currentMonthNumber];
            this.currentYear = date.getFullYear();
            const calendarArray = this.calendar.monthDays(this.currentYear, this.currentMonthNumber);
            this.calendarDays = [].concat.apply([], calendarArray);
        } else if (rang === 'end') {
            this.currentMonthNumber = date.getMonth();
            this.currentMonth = this.months[this.currentMonthNumber];
            this.currentYear = date.getFullYear();
            const calendarArray = this.calendar.monthDays(this.currentYear, this.currentMonthNumber);
            this.calendarDays = [].concat.apply([], calendarArray);
        }
    }

    setDate(): void {
        if (this.date) {
            this.setInputText(this.date, 'start');
            this.setCurrentValues(this.date, 'start');
        } else {
            this.inputText = '';
            this.setCurrentValues(new Date(), 'start');
        }
    }

    setRightDate(): void {
        if (this.dateRight) {
            this.setInputText(this.dateRight, 'end');
            this.setCurrentValues(this.dateRight, 'end');
        } else {
            this.inputTexts = '';
            this.setCurrentValues(new Date(), 'end');
        }
    }

    setCurrentMonth(monthNumber: number) {
        this.currentMonth = this.months[monthNumber];
        const calendarArray = this.calendar.monthDays(this.currentYear, this.currentMonthNumber);
        this.calendarDays = [].concat.apply([], calendarArray);
    }

    setHoveredDay(day: Date): void {
        this.hoveredDay = day;
    }

    removeHoveredDay(day: Date): void {
        this.hoveredDay = null;
    }

    setInputText(date: Date, range: string): void {
        if (range === 'start') {
            let month: string = (date.getMonth() + 1).toString();
            if (month.length < 2) {
                month = `0${month}`;
            }
            let day: string = (date.getDate()).toString();
            if (day.length < 2) {
                day = `0${day}`;
            }

            let inputText: string;
            switch (this.dateFormat.toUpperCase()) {
                case 'YYYY-MM-DD':
                    inputText = `${date.getFullYear()}/${month}/${day}`;
                    break;
                case 'MM-DD-YYYY':
                    inputText = `${month}/${day}/${date.getFullYear()}`;
                    break;
                case 'DD-MM-YYYY':
                    inputText = `${day}/${month}/${date.getFullYear()}`;
                    break;
                default:
                    inputText = `${date.getFullYear()}/${month}/${day}`;
                    break;
            }
            this.inputText = inputText;
        } else if (range === 'end') {
            // 下月
            let month: string = (date.getMonth() + 1).toString();
            if (month.length < 2) {
                month = `0${month}`;
            }
            let day: string = (date.getDate()).toString();
            if (day.length < 2) {
                day = `0${day}`;
            }
            let inputText: string;
            switch (this.dateFormat.toUpperCase()) {
                case 'YYYY-MM-DD':
                    inputText = `${date.getFullYear()}/${month}/${day}`;
                    break;
                case 'MM-DD-YYYY':
                    inputText = `${month}/${day}/${date.getFullYear()}`;
                    break;
                case 'DD-MM-YYYY':
                    inputText = `${day}/${month}/${date.getFullYear()}`;
                    break;
                default:
                    inputText = `${date.getFullYear()}/${month}/${day}`;
                    break;
            }
            this.inputTexts = inputText;
        }


    }

    // Click Handlers
    // ------------------------------------------------------------------------------------
    onArrowLeftClick(): void {
        const currentMonth: number = this.currentMonthNumber;
        let newYear: number = this.currentYear;
        let newMonth: number;

        if (currentMonth === 0) {
            newYear = this.currentYear - 1;
            newMonth = 11;
        } else {
            newMonth = currentMonth - 1;
        }

        const newDate = new Date(newYear, newMonth);
        if (!this.rangeStart || newDate.getTime() >= this.rangeStart.getTime()) {
            this.currentYear = newYear;
            this.currentMonthNumber = newMonth;
            this.setCurrentMonth(newMonth);
            this.triggerAnimation('left');
        }
    }

    onArrowRightClick(): void {
        const currentMonth: number = this.currentMonthNumber;
        let newYear: number = this.currentYear;
        let newMonth: number;

        if (currentMonth === 11) {
            newYear = this.currentYear + 1;
            newMonth = 0;
        } else {
            newMonth = currentMonth + 1;
        }

        const newDate = new Date(newYear, newMonth);
        if (!this.rangeEnd || newDate.getTime() <= this.rangeEnd.getTime()) {
            this.currentYear = newYear;
            this.currentMonthNumber = newMonth;
            this.setCurrentMonth(newMonth);
            this.triggerAnimation('right');
        }
    }

    onCancel(): void {
        this.closeCalendar();
    }

    onInputLeftClick(): void {
        this.showCalendarLeft = !this.showCalendarLeft;
        this.showCalendarRight = false;
        this.setDate();
    }

    onInputRightClick(): void {
        this.showCalendarRight = !this.showCalendarRight;
        this.showCalendarLeft = false;
        this.setRightDate();
    }

    onSelectDay(day: Date): void {
        this.date = day;
        this.Select.emit(day);
        // 点击后关闭选择框
        this.showCalendarLeft = !this.showCalendarLeft;
        this.showCalendarRight = true;
        this.setDate();
        this.setRightDate();
    }

    onSelectRightDay(day): void {
        if (day === 0) {
            return;
        } else {
            this.dateRight = day;
            this.showCalendarRight = !this.showCalendarRight;
        }

    }

    // Listeners
    // ------------------------------------------------------------------------------------
    handleGlobalClick(event): void {
        // 源码nativeElement 的type 有bug 这里无须处理
        if (!this.elementRef.nativeElement.contains(event.target)) {
            if (event.target.dataset && event.target.dataset.i !== 'sa-i') {
                this.closeCalendar();
                this.showCalendarRight = false;
            }
        }

    }

    // Helpers
    // ------------------------------------------------------------------------------------
    getDayBackgroundColor(day: Date, rang: string): string {
        let color = this.colors['white'];
        if (this.isChosenDay(day, rang)) {
            color = this.accentColor;
        } else if (this.isCurrentDay(day)) {
            color = this.colors['lightGrey'];
        }
        // else if (this.isForbbiddenDay(day, rang)) {
        //     color = this.colors['grey']
        // }
        // else if(this.isHoveredDay(day,rang)){
        //     color = this.colors['blue']
        // }
        return color;
    }

    isForbbiddenDay(day, rang) {
        const now = new Date();
        if (day === 0) {
            return true;
        }
        if (rang === 'left') {
            const today = new Date().getTime();
            if (day && day !== 0) {
                if (day.getTime() > today || day.getTime() > this.dateRight.getTime()
                    || day.getTime() < (today - this.rangeMonth * 86400000)) {
                    return true;
                }
            } else {
                return false;
            }
        } else if (rang === 'right') {
            if (day && day !== 0) {
                if (day.getTime() > now.getTime() || day.getTime() < this.date.getTime()) {
                    return true;
                }
            } else {
                return false;
            }
        }

    }

    getDayFontColor(day: Date, rang: string): string {
        let color = this.colors['black'];
        if (this.isChosenDay(day, rang)) {
            color = this.colors['white'];
        }
        if (this.isForbbiddenDay(day, rang)) {
            color = this.colors['grey'];
        }
        return color;
    }

    isChosenDay(day: Date, rang: string): boolean {
        if (day && rang === 'left') {
            return this.date ? day.toDateString() === this.date.toDateString() : false;
        } else if (day && rang === 'right') {
            return this.dateRight ? day.toDateString() === this.dateRight.toDateString() : false;
        } else {
            return false;
        }
    }

    isCurrentDay(day: Date): boolean {
        if (day) {
            return day.toDateString() === new Date().toDateString();
        } else {
            return false;
        }
    }

    isHoveredDay(day: Date, rang: string): boolean {
        return this.hoveredDay ? this.hoveredDay === day && !this.isChosenDay(day, rang) : false;
    }

    triggerAnimation(direction: string): void {
        this.animate = direction;
        setTimeout(() => this.animate = 'reset', 185);
    }
}


