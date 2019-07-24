import { NgModule } from '@angular/core';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecapBookingComponent } from './recap-booking/recap-booking.component';


@NgModule({
  declarations: [
    MainToolbarComponent,
    RecapBookingComponent,
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [MainToolbarComponent, CommonModule, FormsModule, IonicModule, RecapBookingComponent]
})
export class ComponentsModule {}
