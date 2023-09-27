import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaptureDetailPage } from './capture-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CaptureDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaptureDetailPageRoutingModule {}
