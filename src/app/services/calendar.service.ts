import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }

  public selectDay(el: ElementRef): void {
    if (el.nativeElement.getAttribute('fill') === 'clear') {
      el.nativeElement.setAttribute('fill', 'solid');
      el.nativeElement.style.color = 'white';
    } else {
      el.nativeElement.setAttribute('fill', 'clear');
      el.nativeElement.style.color = '#3f3c3c';
    }
  }

  public disableDay(el: ElementRef): void {
    el.nativeElement.setAttribute('disabled', true);
  }

}
