import { Component, OnInit, Input } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { BookingsService } from 'src/app/services/bookings.service';

@Component({
  selector: 'app-profileformbooking',
  templateUrl: './profileformbooking.component.html',
  styleUrls: ['./profileformbooking.component.scss'],
})
export class ProfileformbookingComponent implements OnInit {

  personNumber: number;
  name = '';
  comments = '';

  constructor(private pickerCtrl: PickerController, private bookingService: BookingsService) { }

  ngOnInit() {}

  saveName() {
    this.bookingService.name = this.name;
  }

  saveComments() {
    this.bookingService.comments = this.comments;
  }

  async showPicker() {
    let opts: PickerOptions = {
      buttons: [
        {
          text: 'Done'
        }
      ],
      columns: [
        {
          name: 'personNumber',
          options: [
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6', value: 6 },
            { text: '7', value: 7 },
            { text: '8', value: 8 },
            { text: '9', value: 9 },
            { text: '10', value: 10 }
          ]
        }
      ]
    };
    const picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      const col = await picker.getColumn('personNumber');
      this.personNumber = col.options[col.selectedIndex].value;
      this.bookingService.number_of_persons = this.personNumber;
    });
  }

}
