import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {AppService} from './app.service';

import docCookies from '../assets/js/cookies.js'

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
                // 判断是否登录
                if(res['status'] === 1){
                    let user = res['data'].loginname;
                    console.log(user);
                    docCookies.setItem('user_alias', user)
                }

            });
    }

    ngOnInit() {
        this.getAuth();
    }
}
