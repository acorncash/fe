import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdpopcornDetailPage } from './adpopcorn-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AdpopcornDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})  
export class AdpopcornDetailPageRoutingModule {}
