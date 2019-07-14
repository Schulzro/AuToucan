import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable, throwError, Subject, of, BehaviorSubject } from 'rxjs';
import { catchError, tap, filter, map } from 'rxjs/operators';
import { Booking } from '../models/booking.model';
import * as moment from 'moment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  // observable sources
  private _booking = new BehaviorSubject<Booking>({
    id: null,
    booking_start_date: null,
    booking_end_date:  null,
    name: '',
    email: '',
    phone_number: '',
    comments: '',
    number_of_persons: 0,
    booking_amount: 0,
    created_at:  null,
    updated_at:  null,
    reference: null
  });
  private _bookingStart = new Subject<moment.Moment>();
  private _bookingEnd = new Subject<moment.Moment>();
  private _name = new BehaviorSubject<string>('');
  private _number_of_persons = new Subject<number>();
  private _comments = new Subject<string>();
  private _tel = new Subject<string>();
  private _mail = new Subject<string>();

  // observable streams
  bookingStart$ = this._bookingStart.asObservable();
  bookingEnd$ = this._bookingEnd.asObservable();
  booking$ = this._booking.asObservable();
  name$ = this._name.asObservable();
  number_of_persons$ = this._number_of_persons.asObservable();
  comments$ = this._comments.asObservable();
  tel$ = this._tel.asObservable();
  mail$ = this._mail.asObservable();


  get booking(): BehaviorSubject<Booking> {
    return this._booking;
  }

  set bookingStart(bookingStart: moment.Moment) {
    this._booking.next({...this.booking.value, booking_start_date: bookingStart});
  }

  set bookingEnd(bookingEnd: moment.Moment) {
    this._booking.next({...this.booking.value, booking_end_date: bookingEnd});
  }

  set name(name: string) {
    this._booking.next({...this.booking.value, name: name});
  }

  set comments(comments: string) {
    this._booking.next({...this.booking.value, comments: comments});
  }

  set tel(tel: string) {
    this._booking.next({...this.booking.value, phone_number: tel});
  }

  set mail(mail: string) {
    this._booking.next({...this.booking.value, email: mail});
  }

  set number_of_persons(number_of_persons: number) {
    this._booking.next({...this.booking.value, number_of_persons: number_of_persons});
  }

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  getAll(): Observable<Array<Booking>> {
    return this.http.get<Array<Booking>>(`${environment.apiUri}/bookings`, httpOptions)
    .pipe(
      filter(data => !!data),
      map((data: Booking[]) => data.map((b: Booking) => {
        return {
          ...b,
          booking_end_date: moment(b.booking_end_date),
          booking_start_date: moment(b.booking_start_date),
          created_at: moment(b.created_at),
          updated_at: moment(b.updated_at)
        };
      })),
      catchError(this.handleError)
    );
  }

  book(): Observable<Booking> {
    const booking = {
      name: this.booking.value.name,
      email: this.booking.value.email,
      phone_number: this.booking.value.phone_number,
      comments: this.booking.value.comments,
      number_of_persons: this.booking.value.number_of_persons,
      booking_amount: this.booking.value.booking_amount,
      booking_start_date: this.booking.value.booking_start_date.toISOString(),
      booking_end_date: this.booking.value.booking_end_date.toISOString(),
    };
    return this.http.post<Booking>(`${environment.apiUri}/bookings`, booking, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
}
