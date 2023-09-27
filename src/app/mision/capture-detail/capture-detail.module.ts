import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaptureDetailPageRoutingModule } from './capture-detail-routing.module';

import { CaptureDetailPage } from './capture-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaptureDetailPageRoutingModule
  ],
  declarations: [CaptureDetailPage]
})
export class CaptureDetailPageModule {}
