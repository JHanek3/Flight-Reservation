import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ReservationService} from '../../services/reservation.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {

  public flightData: any;
  public passengerFirstName:any;
  public passengerLastName:any;
  public passengerMiddleName:any;
  public passengerEmail:any;
  public passengerPhone:any;
  public cardNumber:any;
  public expirationDate:any;
  public securityCode:any;


  constructor(private router:Router, private route:ActivatedRoute, private service:ReservationService) { }

  ngOnInit(){
    this.service.getFlight(Number.parseInt(this.route.snapshot.paramMap.get("id"))).subscribe(
      res=>{
        this.flightData = res;
      }
    )
  }

  public onSubmit(data){
    data.flightId = this.flightData.id;
    this.service.saveReservation(data).subscribe(
      res=>{
        this.router.navigate(['/confirm'],res.id);
      }
    )
  }

}
