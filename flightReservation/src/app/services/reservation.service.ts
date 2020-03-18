import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  flightUrl:string = "http://localhost:8080/flightservices/flights";
  reservationUrl:string = "http://localhost:8080/flightservices/reservations";
  flightData:any;

  constructor(private _httpClient:HttpClient) { }

  public getFlights(from:string,to:string,departureDate:string):any{
    return this._httpClient.get(this.flightUrl+"?from="+from+"&to="+to+"&departureDate="+departureDate)
    .pipe(map(res=>{
        this.flightData = res;
      })
    )
  }

  public getFlight(id:number):any{
    return this._httpClient.get(this.flightUrl+"/"+id).pipe(map(res=>{
        res;
      },
      err=>{
        console.error(err);
      })
    )
  }

  public saveReservation(reservation):any{
    return this._httpClient.post(this.reservationUrl,reservation).pipe(
      map(res=>{
        return res;
      })
    )
  }
}
