import { CalendarStartDirective } from './calendar-start.directive';
import { calendarValueServiceStub } from '../services/calendar.service.stub';

describe('CalendarStartDirective', () => {
  it('should create an instance', () => {
    const directive = new CalendarStartDirective(calendarValueServiceStub);
    expect(directive).toBeTruthy();
  });
});
