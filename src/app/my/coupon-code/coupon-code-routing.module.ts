import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CouponCodePage } from './coupon-code.page';

const routes: Routes = [
  {
    path: '',
    component: CouponCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CouponCodePageRoutingModule {}
