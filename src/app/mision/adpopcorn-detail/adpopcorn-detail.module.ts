import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdpopcornDetailPageRoutingModule } from './adpopcorn-detail-routing.module';

import { AdpopcornDetailPage } from './adpopcorn-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdpopcornDetailPageRoutingModule
  ],
  declarations: [AdpopcornDetailPage]
})
export class AdpopcornDetailPageModule {}
