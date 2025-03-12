import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiURL = "http://localhost:3001"
  private reservations: Reservation[] = [];

  // constructor(){
  //   let savedReservation = localStorage.getItem("reservations");
  //   this.reservations = savedReservation ? JSON.parse(savedReservation) : [];
  // }

  constructor(private http: HttpClient){}

  //CRUD

  getReservations(): Observable<Reservation[]>{
    //return this.reservations;
    return this.http.get<Reservation[]>(this.apiURL + "/reservations");
  }

  getReservation(id: string) : Observable<Reservation>{
    //return this.reservations.find(res => res.id === id);
    return this.http.get<Reservation>(this.apiURL + "/reservation/" + id);
  }

  addReservation(reservation: Reservation): Observable<void>{

    return this.http.post<void>(this.apiURL + "/reservation/", reservation);
   
   
    // reservation.id = Date.now().toString();
    // this.reservations.push(reservation);
    //localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  deleteReservation(id: string): Observable<void>{
    return this.http.delete<void>(this.apiURL + "/reservation/" + id);

    // let index = this.reservations.findIndex(res => res.id === id);
    // this.reservations.splice(index, 1);
    //localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  updateReservation(id: string, updateReservation: Reservation): Observable<void>{
    return this.http.put<void>(this.apiURL + "/reservation/" + id, updateReservation);

    // let index = this.reservations.findIndex(res => res.id === id);
    // this.reservations[index] = updateReservation;
    //localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }
}
