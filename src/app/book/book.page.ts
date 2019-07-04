import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild
} from '@angular/core';
import * as moment from 'moment';
import { CalendarService } from '../services/calendar.service';
import { BookingsService } from '../services/bookings.service';
import { Booking } from '../models/booking.model';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit, AfterViewInit {


  bookings: Booking[] = [];
  canBook = true;
  booking_start_date: moment.Moment;
  bookign_end_date: moment.Moment;
  bookingFailure = false;

  @ViewChild('bookingSlider') bookingSlider: IonSlides;



  constructor(private bookingService: BookingsService, private calendarService: CalendarService) {
    this.bookingService.booking$.subscribe(booking => {
      this.booking_start_date = booking.booking_start_date;
      this.bookign_end_date = booking.booking_end_date;
    });
   }

  ngOnInit() {
    this.getBookings();
  }

  ngAfterViewInit(): void {
    this.bookingSlider.lockSwipes(true);
  }

  onBook(canBook: boolean): void {
    this.canBook = canBook;
  }

  swipeRight() {
    this.bookingSlider.lockSwipes(false);
    this.bookingSlider.slideNext();
    this.bookingSlider.lockSwipes(true);
  }

  swipeLeft() {
    this.bookingSlider.lockSwipes(false);
    this.bookingSlider.slidePrev();
    this.bookingSlider.lockSwipes(true);
  }

  book() {
    this.bookingService.book().toPromise()
    .then(() => this.swipeRight())
    .catch(() => this.bookingFailure = true);
  }

  async getBookings(): Promise<void | Booking[]> {
    try {
      const bookings = await this.bookingService.getAll().toPromise();
      return this.bookings = bookings;
    } catch (error) {
      return console.error(error);
    }
  }
}
