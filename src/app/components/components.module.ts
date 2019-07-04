import { NgModule } from '@angular/core';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [MainToolbarComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [MainToolbarComponent, CommonModule, FormsModule, IonicModule]
})
export class ComponentsModule {}
