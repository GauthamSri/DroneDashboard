import { Injectable } from '@angular/core';
import { CustomHeaderService } from '../shared/custom-header.service';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class FlightService {
    urlSearchParams: URLSearchParams;
    customHeaders: CustomHeaderService;
    private _flightAPIUrl: string = '/api/flight/';
    private _missionAPIUrl: string = '/api/autopilot/';

    constructor(private http: Http) {
        this.urlSearchParams = new URLSearchParams();
        this.customHeaders = new CustomHeaderService();
    }
    takeoff(): Observable<Response> {
        //this.customHeaders.options.search = this.urlSearchParams;

        return this.http.get(this._flightAPIUrl + 'takeoff')
            .map(res => res)
            .catch(this.handleError);
    }

    land(): Observable<Response> {
        return this.http.get(this._flightAPIUrl + 'land')
            .map(res => res)
            .catch(this.handleError);
    }

     front(): Observable<Response> {
        return this.http.get(this._flightAPIUrl + 'front')
            .map(res => res)
            .catch(this.handleError);
    }

     back(): Observable<Response> {
        return this.http.get(this._flightAPIUrl + 'back')
            .map(res => res)
            .catch(this.handleError);
    }

     left(): Observable<Response> {
        return this.http.get(this._flightAPIUrl + 'left')
            .map(res => res)
            .catch(this.handleError);
    }

     right(): Observable<Response> {
        return this.http.get(this._flightAPIUrl + 'right')
            .map(res => res)
            .catch(this.handleError);
    }

    up(): Observable<Response> {
        return this.http.get(this._flightAPIUrl + 'up')
            .map(res => res)
            .catch(this.handleError);
    }

    down(): Observable<Response> {
        return this.http.get(this._flightAPIUrl + 'down')
            .map(res => res)
            .catch(this.handleError);
    }

    stop(): Observable<Response> {
        return this.http.get(this._flightAPIUrl + 'stop')
            .map(res => res)
            .catch(this.handleError);
    }

    clockwise(): Observable<Response> {
        return this.http.get(this._flightAPIUrl + 'clockwise')
            .map(res => res)
            .catch(this.handleError);
    }

    counterClockwise(): Observable<Response> {
        return this.http.get(this._flightAPIUrl + 'counterClockwise')
            .map(res => res)
            .catch(this.handleError);
    }

    runmission(): Observable<Response> {
        return this.http.get(this._missionAPIUrl + 'runmission')
            .map(res => res)
            .catch(this.handleError);
    }


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
