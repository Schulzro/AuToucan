import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking.model';
import { BookingsService } from 'src/app/services/bookings.service';

@Component({
  selector: 'app-recap-booking',
  templateUrl: './recap-booking.component.html',
  styleUrls: ['./recap-booking.component.scss'],
})
export class RecapBookingComponent implements OnInit {

  booking: Booking;

  constructor(private bookingService: BookingsService) { }

  ngOnInit() {
    this.bookingService.booking$.subscribe(booking => this.booking = booking);
  }

}
