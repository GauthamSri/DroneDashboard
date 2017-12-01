import {Injectable} from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';

@Injectable()

export class CustomHeaderService {
    headers: Headers;
    options: RequestOptions;

    constructor() {
        this.headers = new Headers({
            'Content-Type': 'application/json;charset=UTF-8'
        });

        this.options = new RequestOptions({ 'headers': this.headers });
    }

    getHeaderOptions() {
        return this.options;
    }
}
