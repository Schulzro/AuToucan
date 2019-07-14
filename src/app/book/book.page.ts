import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { BookingsService } from '../services/bookings.service';
import { Booking } from '../models/booking.model';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {


  bookings: Booking[] = [];
  canBook = true;
  bookingFailure = false;
  bookingCreated: Booking;
  booking: Booking;

  @ViewChild('bookingSlider') bookingSlider: IonSlides;



  constructor(
    private bookingService: BookingsService, 
    private router: Router) {
    this.bookingService.booking$.subscribe(booking => this.booking = booking);
   }

  ngOnInit() {
    this.bookingSlider.lockSwipes(true);
    this.getBookings();
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
    .then(booking => {
      this.bookingCreated = booking;
      this.swipeRight();
    })
    .catch(() => this.bookingFailure = true);
  }

  goToHomePage() {
    this.router.navigate(['/home']).then(() => this.bookingSlider.slideTo(0));
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
