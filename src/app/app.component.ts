import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {AppService} from './app.service';

@Component({
    selector: 'app-root',
    // encapsulation: ViewEncapsulation.None,
    template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
    constructor(private AuthHttp: AppService) {
    }
    // auth
    getAuth() {
        this.AuthHttp.isAuth()
            .subscribe((res) => {
                console.log(res['status']);

            });
    }

    ngOnInit() {
        this.getAuth();
    }
}
