import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../../services/reservation.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-display-flights',
  templateUrl: './display-flights.component.html',
  styleUrls: ['./display-flights.component.css']
})
export class DisplayFlightsComponent implements OnInit {

  public data:any;

  constructor(private service:ReservationService, private router:Router) { }

  ngOnInit() {
    this.data = this.service.flightData;
  }

  public onSelect(id:number):any{
    this.router.navigate(['/passengerDetails/'+id]);
  }

}
