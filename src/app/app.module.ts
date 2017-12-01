import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CustomHeaderService } from './shared/custom-header.service';
import { ToastrService } from './shared/toastr.service';



const appRoutes: Routes = [
  {
    path: '',
    component: FlightComponent
  },
  {
    path: 'flight',
    component: FlightComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CustomHeaderService,ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
