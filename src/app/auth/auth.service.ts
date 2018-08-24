/**
 * Created by daishuang on 2018/7/5.
 */
import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';


import docCookies from '../../assets/js/cookies.js';


@Injectable()

export class AuthGuard implements CanActivate {
    private session =  document.cookie.replace(/(?:(?:^|.*;\s*)session_id\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    private user = docCookies.getItem('user_alias');
    constructor(private router: Router) {
    }

    canActivate() {
        return this.checkIsLogged(this.session,this.user);
    }

    // 判断是否登录 否则返回login
    checkIsLogged(data: any,user: string) {
        if (data || user) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

    // canLoad
    canLoad() {
        if (!this.session && !this.user) {
            return true;
        }
        this.router.navigate(['/base']);
    }


}
