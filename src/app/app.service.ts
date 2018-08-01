import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ShareHttp} from './shared/services';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private http: ShareHttp) {
    }

    private auth = '/api/auth';

    isAuth() {
        return this.http.get(this.auth);
    }

}
