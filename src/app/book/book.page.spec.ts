import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPage } from './book.page';
import { By } from 'protractor';
import * as moment from 'moment';

describe('BookPage', () => {
  let component: BookPage;
  let fixture: ComponentFixture<BookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enable ok button when one date is selected', () => {
    const booking_start = component.days[0]; // first day of the month
    const ok_button = fixture.nativeElement.querySelector('#validationButton');
    expect(ok_button.disabled).toBeTruthy();
    component.selectDays(booking_start);
    fixture.detectChanges();
    expect(ok_button.disabled).toBeFalsy();
  });

  describe('should have correct start and end dates', () => {
    it('should store dates', () => {
      const booking_start = component.days[0]; // first day of the month
      const booking_end = component.days[2]; // third day of the month
      component.selectDays(booking_start);
      component.selectDays(booking_end);
      fixture.detectChanges();
      expect((component.booking_start_date as moment.Moment).isSame(booking_start, 'day')).toBe(true);
      expect((component.booking_end_date as moment.Moment).isSame(booking_end, 'day')).toBe(true);
    });

    it('should do 1 -> 3 -> 2 so start = 1 and end = 2', () => {
      const booking_start = component.days[0]; // first day of the month
      const temp_date = component.days[1];
      const booking_end = component.days[2]; // third day of the month
      component.selectDays(booking_start);
      fixture.detectChanges();
      component.selectDays(temp_date);
      fixture.detectChanges();
      component.selectDays(booking_end);
      fixture.detectChanges();
      expect((component.booking_start_date as moment.Moment).isSame(booking_start, 'day')).toBe(true);
      expect((component.booking_end_date as moment.Moment).isSame(booking_end, 'day')).toBe(true);
    });

    it('should do 1 -> 2 -> 1 -> 2 so start = null and end = null', () => {
      const booking_start = component.days[0]; // first day of the month
      const booking_end = component.days[2]; // third day of the month
      const ok_button = fixture.nativeElement.querySelector('#validationButton');
      component.selectDays(booking_start);
      fixture.detectChanges();
      component.selectDays(booking_end);
      fixture.detectChanges();
      component.selectDays(booking_start);
      fixture.detectChanges();
      expect(ok_button.disabled).toBeFalsy();
      component.selectDays(booking_end);
      fixture.detectChanges();
      expect(ok_button.disabled).toBeTruthy();
      expect(component.booking_start_date).toBe(null);
      expect(component.booking_end_date).toBe(null);
    });

    it('should do 4 -> 2 -> 1 so start = 1 and end = 2', () => {
      const booking_end = component.days[3];
      const booking_start = component.days[0];
      const temp_date1 = component.days[1];
      component.selectDays(booking_end);
      fixture.detectChanges();
      component.selectDays(temp_date1);
      fixture.detectChanges();
      component.selectDays(booking_start);
      fixture.detectChanges();
      expect((component.booking_start_date as moment.Moment).isSame(booking_start, 'day')).toBe(true);
      expect((component.booking_end_date as moment.Moment).isSame(booking_end, 'day')).toBe(true);
    });

    it('should do 5 -> 8 -> 8 -> 3 so start = 3 and end = 5', () => {
      const booking_end = component.days[4];
      const booking_start = component.days[2];
      const temp_date1 = component.days[7];
      component.selectDays(booking_end);
      fixture.detectChanges();
      component.selectDays(temp_date1);
      fixture.detectChanges();
      component.selectDays(temp_date1);
      fixture.detectChanges();
      component.selectDays(booking_start);
      fixture.detectChanges();
      expect((component.booking_start_date as moment.Moment).isSame(booking_start, 'day')).toBe(true);
      expect((component.booking_end_date as moment.Moment).isSame(booking_end, 'day')).toBe(true);
    });

    it('should do 5 -> 8 -> 3 -> 3 -> 4 so start = 4 and end = 8', () => {
      const booking_end = component.days[7];
      const booking_start = component.days[3];
      const temp_date1 = component.days[2];
      const temp_date2 = component.days[4];
      component.selectDays(temp_date2);
      fixture.detectChanges();
      component.selectDays(booking_end);
      fixture.detectChanges();
      component.selectDays(temp_date1);
      fixture.detectChanges();
      component.selectDays(temp_date1);
      fixture.detectChanges();
      component.selectDays(booking_start);
      fixture.detectChanges();
      expect((component.booking_start_date as moment.Moment).isSame(booking_start, 'day')).toBe(true);
      expect((component.booking_end_date as moment.Moment).isSame(booking_end, 'day')).toBe(true);
    });

    it('should do 5 -> 8 -> 3 -> 3 -> 7 so start = 7 and end = 8', () => {
      const booking_end = component.days[7];
      const booking_start = component.days[6];
      const temp_date1 = component.days[2];
      const temp_date2 = component.days[4];
      component.selectDays(temp_date2);
      fixture.detectChanges();
      component.selectDays(booking_end);
      fixture.detectChanges();
      component.selectDays(temp_date1);
      fixture.detectChanges();
      component.selectDays(temp_date1);
      fixture.detectChanges();
      component.selectDays(booking_start);
      fixture.detectChanges();
      expect((component.booking_start_date as moment.Moment).isSame(booking_start, 'day')).toBe(true);
      expect((component.booking_end_date as moment.Moment).isSame(booking_end, 'day')).toBe(true);
    });
  });
});
