import { Component, OnInit, Input, ElementRef, Output, ViewChildren, QueryList, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { Booking } from 'src/app/models/booking.model';
import { CalendarService } from 'src/app/services/calendar.service';
import { BookingsService } from 'src/app/services/bookings.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  private _bookings: Booking[] = [];

  @Input()
  set bookings(bookings: Booking[]) {
    this._bookings = bookings || [];
    this.initializeCalendarView();
  }

  get bookings(): Booking[] {
    return this._bookings;
  }
  @Output() canBook = new EventEmitter<boolean>();
  booking_start_date;
  booking_end_date;

  @ViewChildren('calendarDay', { read: ElementRef }) calendarDayRefs: QueryList<ElementRef>;


  monthsNames: string[] = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  monthNumber: number = moment().month();
  monthName: string = this.monthsNames[this.monthNumber];
  year: number = moment().year();
  viewDate: Date = new Date();
  calendarStartDateNumber: number;
  highlightedCalendarDays: ElementRef<any>[] = [];
  days: moment.Moment[] = [];

  constructor(private calendarService: CalendarService, private bookingService: BookingsService) { }

  ngOnInit() {}

  futureMonth(): void {
    if (this.monthNumber === 11) {
      this.year++;
      this.monthNumber = -1;
    }
    this.monthNumber = this.monthNumber + 1;
    this.initializeCalendarView();
  }

  pastMonth(): void {
    if (this.monthNumber === 0) {
      this.year--;
      this.monthNumber = 12;
    }
    this.monthNumber = this.monthNumber - 1;
    this.initializeCalendarView();
  }

  initializeCalendarView() {
    this.monthName = this.monthsNames[this.monthNumber];
    this.days = Array.from(
      { length: moment().month(this.monthNumber).daysInMonth() },
      (x, i) => moment().month(this.monthNumber).startOf('month').add(i, 'days')
    );
    this.calendarStartDateNumber = this.days[0].day();
    setTimeout(() => {
      this.hightlightSelectedDays();
      this.hightlightPeriodBetweenSelectedDays();
      this.disableBookedDays();
    }, 500);
  }

  isToday(day: moment.Moment): boolean {
    return moment().isSame(day, 'day');
  }

  getCalendarDayRef(day: number): ElementRef {
    return this.calendarDayRefs.filter(calendarDayRef => calendarDayRef.nativeElement.innerText === day + '')[0];
  }

  hightlightSelectedDays() {
    const monthNumberString = (this.monthNumber + 1).toString();
    if (this.booking_start_date && this.booking_start_date.format('M') === monthNumberString) {
      this.calendarService.selectDay(this.getCalendarDayRef(parseInt(this.booking_start_date.format('D'), 10)));
    }

    if (this.booking_end_date && this.booking_end_date.format('M') === monthNumberString) {
      this.calendarService.selectDay(this.getCalendarDayRef(parseInt(this.booking_end_date.format('D'), 10)));
    }
  }

  hightlightPeriodBetweenSelectedDays() {
    if (this.highlightedCalendarDays && this.highlightedCalendarDays.length) {
      this.highlightedCalendarDays.forEach((el: ElementRef) => el.nativeElement.style.background = '#ffffff');
    }

    this.highlightedCalendarDays = this.getCalendarDaysPeriod(this.booking_start_date, this.booking_end_date);

    if (this.highlightedCalendarDays && this.highlightedCalendarDays.length) {
      this.highlightedCalendarDays.forEach((el: ElementRef) => el.nativeElement.style.background = '#d4f7f7');
    }
  }

  disableBookedDays() {
    const monthNumberString = (this.monthNumber + 1).toString();
    this.bookings
      .filter(booking => booking &&
        (booking.booking_start_date.format('M') === monthNumberString ||
        booking.booking_end_date.format('M') === monthNumberString))
      .forEach(booking => {
        this.getCalendarDaysPeriod(booking.booking_start_date, booking.booking_end_date).forEach((calendarDay: ElementRef) => {
          this.calendarService.disableDay(calendarDay);
        });
      });
  }

  getCalendarDaysPeriod(booking_start: moment.Moment, booking_end: moment.Moment): ElementRef<any>[] {
    const monthNumberString = (this.monthNumber + 1).toString();

    if (!booking_end ||
      !booking_start ||
      (booking_end.format('M') !== monthNumberString && booking_start.format('M') !== monthNumberString) ||
      (booking_end as moment.Moment).clone().subtract(1, 'days').isSame(booking_start, 'day')) { return; }

    const booking_start_index = booking_start.format('M') === monthNumberString ?
      this.calendarDayRefs.toArray().indexOf(this.getCalendarDayRef(parseInt(booking_start.format('D'), 10))) : 0;

    const booking_end_index = booking_end.format('M') === monthNumberString ? this.calendarDayRefs.toArray()
      .indexOf(this.getCalendarDayRef(parseInt(booking_end.format('D'), 10))) : this.calendarDayRefs.length;

      return this.calendarDayRefs.toArray().slice(booking_start_index, booking_end_index + 1);

  }

  selectDays(day: moment.Moment): void {
    const selected_day: moment.Moment = moment().set({
      'year': this.year,
      'month': this.monthNumber,
      'date': parseInt(day.format('D'), 10)
    });

    if (!this.booking_start_date) {
      if (this.booking_end_date) {
        if (selected_day.isSame(this.booking_end_date, 'day')) {
          this.booking_end_date = null;
        } else if (selected_day.isBefore(this.booking_end_date)) {
          this.booking_start_date = selected_day;
        } else {
          this.booking_start_date = this.booking_end_date;
          this.booking_end_date = selected_day;
        }
      } else {
        this.booking_start_date = selected_day;
      }
    } else {
      if (this.booking_start_date && selected_day.isSame(this.booking_start_date, 'day')) {
        this.booking_start_date = null;
      } else if (this.booking_end_date && selected_day.isSame(this.booking_end_date, 'day')) {
        this.booking_end_date = null;
      } else if (this.booking_start_date && selected_day.isBefore(this.booking_start_date, 'day')) {
        if (!this.booking_end_date) {
          this.booking_end_date = this.booking_start_date;
          this.booking_start_date = selected_day;
        } else {
          const firstBookingDay = parseInt(this.booking_start_date.format('D'), 10);
          this.calendarService.selectDay(this.getCalendarDayRef(firstBookingDay));
          this.booking_start_date = selected_day;
        }
      } else if (this.booking_start_date && selected_day.isAfter(this.booking_start_date, 'day')) {
        if (this.booking_end_date && this.booking_end_date.format('M') === (this.monthNumber + 1).toString()) {
          const lastBookingDay = parseInt(this.booking_end_date.format('D'), 10);
          this.calendarService.selectDay(this.getCalendarDayRef(lastBookingDay));
        }
        this.booking_end_date = selected_day;
      }
    }
    this.hightlightPeriodBetweenSelectedDays();
    this.bookingService.bookingStart = this.booking_start_date;
    this.bookingService.bookingEnd = this.booking_end_date;
    this.canBook.emit(this.isBookingFree());
  }

  isBookingFree(): boolean {
    return this.bookings && this.bookings.length && this.booking_start_date && this.booking_end_date ?
      !this.bookings.find(booking =>
        booking.booking_start_date.isBetween(this.booking_start_date, this.booking_end_date, null, '[]') ||
        booking.booking_end_date.isBetween(this.booking_start_date, this.booking_end_date, null, '[]')) : true;
  }


}
