import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuitPageRoutingModule } from './quit-routing.module';

import { QuitPage } from './quit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuitPageRoutingModule
  ],
  declarations: [QuitPage]
})
export class QuitPageModule {}
