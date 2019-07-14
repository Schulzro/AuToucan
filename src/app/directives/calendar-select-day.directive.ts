import { Directive, ElementRef, HostListener } from '@angular/core';
import { CalendarService } from '../services/calendar.service';

@Directive({
  selector: '[appCalendarSelectDay]'
})
export class CalendarSelectDayDirective {

  constructor(private el: ElementRef, private calendarService: CalendarService) { }

  @HostListener('click') onClick() {
    this.calendarService.selectDay(this.el);
  }

}
