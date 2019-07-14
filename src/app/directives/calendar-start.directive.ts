import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appCalendarStart]'
})
export class CalendarStartDirective implements OnChanges {

  @Input() calendarStartDayNumber: number;
  @Input() calendarIndex: number;

  constructor(private el: ElementRef) { }

  ngOnChanges() {
    if(this.calendarIndex === 0) {
      this.el.nativeElement.style.gridColumnStart = this.calendarStartDayNumber;
    }
  }

}
