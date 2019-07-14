import { Component, OnInit, Input } from '@angular/core';
import { Booking } from 'src/app/models/booking.model';

@Component({
  selector: 'app-booking-success',
  templateUrl: './booking-success.component.html',
  styleUrls: ['./booking-success.component.scss'],
})
export class BookingSuccessComponent implements OnInit {

  @Input() newBooking: Booking;
  constructor() { }

  ngOnInit() {}

}
