/**
 * Created by daishuang on 2018/7/5.
 */
import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()

export class AuthGuard implements CanActivate {
    private session =  document.cookie.replace(/(?:(?:^|.*;\s*)session_id\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    constructor(private router: Router) {
    }

    canActivate() {
        console.log('路由守卫');
        console.log(this.session);
        return this.checkIsLogged(this.session);
    }

    // 判断是否登录 否则返回login
    checkIsLogged(data: any) {
        if (data) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

    // canLoad
    canLoad() {
        if (!this.session) {
            return true;
        }
        this.router.navigate(['/base']);
    }


}
