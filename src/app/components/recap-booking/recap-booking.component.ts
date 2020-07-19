import { Component, OnInit, Input } from '@angular/core';
import { Booking } from 'src/app/models/booking.model';
import { BookingsService } from 'src/app/services/bookings.service';

@Component({
  selector: 'app-recap-booking',
  templateUrl: './recap-booking.component.html',
  styleUrls: ['./recap-booking.component.scss'],
})
export class RecapBookingComponent {

  @Input()
  booking: Booking;

  constructor(private bookingService: BookingsService) { }

}
