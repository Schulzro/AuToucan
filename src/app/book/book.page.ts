import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { BookingsService } from '../services/bookings.service';
import { Booking } from '../models/booking.model';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage  {

  bookings: Booking[] = [];
  canBook = true;
  bookingFailure = false;
  bookingCreated: Booking;
  booking: Booking;
  resetSliderData = false;
  private resetSubject: Subject<void> = new Subject<void>();

  @ViewChild('bookingSlider') bookingSlider: IonSlides;

  constructor(
    private bookingService: BookingsService, 
    private router: Router) {
    this.bookingService.booking$.subscribe(booking => this.booking = booking);
   }

   ionViewWillEnter() {
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
    this.router.navigate(['/home']).then(() => {
      this.bookingService.emptyBooking();
      this.resetSubject.next();
      this.bookingSlider.lockSwipes(false);
      this.bookingSlider.slideTo(0)
      .then(() => {
        this.bookingSlider.lockSwipes(true);
      });
    });
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
