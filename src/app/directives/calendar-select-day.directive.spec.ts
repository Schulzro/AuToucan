import { CalendarSelectDayDirective } from './calendar-select-day.directive';
import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


@Component({
  template: `<button appCalendarSelectDay>Test</button>`
})
class TestComponent { }


describe('CalendarSelectDayDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let testElement: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ CalendarSelectDayDirective, TestComponent ]
    })
    .createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // initial binding

    // all elements with an attached HighlightDirective
    testElement = fixture.debugElement.query(By.directive(CalendarSelectDayDirective));

  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });
});
