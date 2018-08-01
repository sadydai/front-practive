/**
 * Created by daishuang on 2018/7/4.
 */

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class ShareHttp {

    constructor(private http: HttpClient) {
    }

    // domain = '';
    domain = 'http://localhost:9090';

    get(url) {
        const newUrl = this.domain + url;
        return this.http.get(newUrl, {withCredentials: true});
    }

    post(url, body) {
        const newUrl = this.domain + url;
        return this.http.post(newUrl, body, {withCredentials: true});
    }
}
