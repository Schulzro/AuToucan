import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BookPage } from './book.page';
import { ComponentsModule } from '../components/components.module';
import { CalendarStartDirective } from '../directives/calendar-start.directive';
import { CalendarSelectDayDirective } from '../directives/calendar-select-day.directive';
import { CalendarComponent } from '../components/calendar/calendar.component';
import { ProfileformbookingComponent } from '../components/profileformbooking/profileformbooking.component';
import { ContactformbookingComponent } from '../contactformbooking/contactformbooking.component';
import { RecapBookingComponent } from '../components/recap-booking/recap-booking.component';
import { BookingSuccessComponent } from '../components/booking-success/booking-success.component';

const routes: Routes = [
  {
    path: '',
    component: BookPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BookPage,
    CalendarStartDirective,
    CalendarSelectDayDirective,
    CalendarComponent,
    ProfileformbookingComponent,
    ContactformbookingComponent,
    BookingSuccessComponent,
  ],
  providers: []
})
export class BookPageModule {}
