import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../services/bookings.service';
import { Booking } from '../models/booking.model';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.page.html',
  styleUrls: ['./my-booking.page.scss'],
})
export class MyBookingPage implements OnInit {

  reference = '';
  myBooking: Booking; 
  searchBookingFailure = false;
  
  constructor(
    private bookingService: BookingsService, 
    private alertCtrl: AlertController,
    private router: Router) { }

  ngOnInit() {
  }

  searchBooking() {
    this.bookingService.getByReference(this.reference)
    .then((booking: Booking) => {
      this.myBooking = booking;
      this.searchBookingFailure = false;
    })
    .catch(error => { 
      console.error(error);
      this.searchBookingFailure = !this.searchBookingFailure;
    });
  }

  async presentDeleteAlert() {
    const alert: HTMLIonAlertElement = await this.alertCtrl.create({
      header: 'Supprimer',
      message: 'Etes vous sur de vouloir supprmier votre réservation ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Oui',
          handler: () => {
            this.deleteBooking();
          }
        }
      ]
    });

    alert.present();
  }

  detele() {
    this.presentDeleteAlert();
  }

  deleteBooking() {
    this.bookingService.delete(this.myBooking.id)
    .then(booking => {
      this.router.navigate(['/home']).then(() => this.myBooking = null);
    })
    .catch(error => console.error(error));
  }

}
