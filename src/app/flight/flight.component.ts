import { Component,ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { FlightService } from './flight.service';
import { BatteryService } from './battery.service';
import { ToastrService } from '../shared/toastr.service';
declare var NodecopterStream: any;

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  providers: [FlightService,ToastrService,BatteryService]
})


export class FlightComponent implements OnInit {

 @ViewChild('ref') ref: ElementRef;
  video: any;
  baseUrl:string = '/api/flight';
  result : string = '';
  sub: Subscription;
  battery : number = 35;


  constructor(public element: ElementRef,private _flightService: FlightService,private _toastr: ToastrService,private _batteryService: BatteryService) {
  }

  ngOnInit(): void {
    let x = new NodecopterStream(this.ref.nativeElement, {port: 3001});

       this.sub  = this._batteryService.getBatteryPercentage()
        .subscribe(value => {
          this.battery = value;
          console.log("battery value = "+this.battery);
        });
       

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  takeoff(): void {
      this._flightService.takeoff().subscribe(
      (response: any) => {
        this.result = response.json().message;
      this._toastr.success(response.json().message,"success!");
      },
      () => {
          this._toastr.error("Seems like some problem at the Server","Server Error!");
       });
  }

  land(): void {
      this._flightService.land().subscribe(
      (response: any) => {
        this.result = response.json().message;
       this._toastr.success(response.json().message,"success!");
      },
      () => {
          this._toastr.error("Seems like some problem at the Server","Server Error!");
       });
      
  }

  runmission(): void {
      this._flightService.runmission().subscribe(
      (response: any) => {
        this.result = response.json().message;
       this._toastr.success(response.json().message,"success!");
      },
      () => {
          this._toastr.error("Seems like some problem at the Server","Server Error!");
       });
      
  }
  front(): void {
      this._flightService.front().subscribe(
      (response: any) => {
        this.result = response.json().message;
       this._toastr.success(response.json().message,"success!");
      },
      () => {
          this._toastr.error("Seems like some problem at the Server","Server Error!");
       });
  }
  back(): void {
      this._flightService.back().subscribe(
      (response: any) => {
        this.result = response.json().message;
       this._toastr.success(response.json().message,"success!");
      },
      () => {
          this._toastr.error("Seems like some problem at the Server","Server Error!");
       });
  }
  left(): void {
       this._flightService.left().subscribe(
      (response: any) => {
        this.result = response.json().message;
       this._toastr.success(response.json().message,"success!");
      },
      () => {
          this._toastr.error("Seems like some problem at the Server","Server Error!");
       });
  }
  right(): void {
       this._flightService.right().subscribe(
      (response: any) => {
        this.result = response.json().message;
       this._toastr.success(response.json().message,"success!");
      },
      () => {
          this._toastr.error("Seems like some problem at the Server","Server Error!");
       });
  }

   up(): void {
       this._flightService.up().subscribe(
      (response: any) => {
        this.result = response.json().message;
       this._toastr.success(response.json().message,"success!");
      },
      () => {
          this._toastr.error("Seems like some problem at the Server","Server Error!");
       });
  }

   down(): void {
       this._flightService.down().subscribe(
      (response: any) => {
        this.result = response.json().message;
       this._toastr.success(response.json().message,"success!");
      },
      () => {
          this._toastr.error("Seems like some problem at the Server","Server Error!");
       });
  }
  stop(): void {
      this._flightService.stop().subscribe(
      (response: any) => {
        this.result = response.json().message;
       this._toastr.success(response.json().message,"success!");
      },
      () => {
          this._toastr.error("Seems like some problem at the Server","Server Error!");
       });
  }
  clockwise(): void {
     this._flightService.clockwise().subscribe(
      (response: any) => {
        this.result = response.json().message;
       this._toastr.success(response.json().message,"success!");
      },
      () => {
          this._toastr.error("Seems like some problem at the Server","Server Error!");
       });
  }
  counterClockwise(): void {
      this._flightService.counterClockwise().subscribe(
      (response: any) => {
        this.result = response.json().message;
       this._toastr.success(response.json().message,"success!");
      },
      () => {
          this._toastr.error("Seems like some problem at the Server","Server Error!");
       });
  }

  private handleError(error: Response) {
        console.error(error);
        this.result = error.json().error || 'Server error';
    }

}
