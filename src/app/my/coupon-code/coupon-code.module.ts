import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CouponCodePageRoutingModule } from './coupon-code-routing.module';

import { CouponCodePage } from './coupon-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CouponCodePageRoutingModule
  ],
  declarations: [CouponCodePage]
})
export class CouponCodePageModule {}
