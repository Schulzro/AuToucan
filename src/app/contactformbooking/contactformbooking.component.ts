import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../services/bookings.service';

@Component({
  selector: 'app-contactformbooking',
  templateUrl: './contactformbooking.component.html',
  styleUrls: ['./contactformbooking.component.scss'],
})
export class ContactformbookingComponent implements OnInit {

  tel = '';
  email = '';

  constructor(private bookingService: BookingsService) { }

  ngOnInit() {}

  saveTel() {
    this.bookingService.tel = this.tel;
  }

  saveEmail() {
    this.bookingService.mail = this.email;
  }

}
