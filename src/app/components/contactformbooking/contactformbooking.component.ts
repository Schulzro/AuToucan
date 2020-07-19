import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { BookingsService } from '../../services/bookings.service';
import { Observable, Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactformbooking',
  templateUrl: './contactformbooking.component.html',
  styleUrls: ['./contactformbooking.component.scss'],
})
export class ContactformbookingComponent implements OnInit, OnDestroy {

  tel = '';
  email = '';
  @Input() reset: Observable<void>;
  @ViewChild('contactForm') contactForm: NgForm;
  private resetSub: Subscription;

  constructor(private bookingService: BookingsService) { }

  ngOnInit() {
    this.resetSub = this.reset.subscribe(() => {
      this.tel = '';
      this.email = '';
      this.contactForm.reset();
    });
  }

  ngOnDestroy(): void {
    this.resetSub.unsubscribe();
  }

  saveTel() {
    this.bookingService.tel = this.tel;
  }

  saveEmail() {
    this.bookingService.mail = this.email;
  }

}
