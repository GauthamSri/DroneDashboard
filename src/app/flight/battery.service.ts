import { Injectable } from '@angular/core';
import { CustomHeaderService } from '../shared/custom-header.service';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import * as io from 'socket.io-client';

@Injectable()

export class BatteryService {

    private _flightAPIUrl: string = '/api/flight/';
    private _missionAPIUrl: string = '/api/autopilot/';
    observer: Observer<number>;

    constructor(private http: Http) {

    }

    getBatteryPercentage(): Observable<number> {
        var socket  = io.connect();

    socket.on('data', (res) => {
      this.observer.next(res.data);
    });

    return this.createObservable();
    }

    createObservable() : Observable<number> {
      return Observable.create((observer: Observer<number>) => {
        this.observer = observer;
      });
  }

    


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
