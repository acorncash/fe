import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrsDetailPage } from './prs-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PrsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrsDetailPageRoutingModule {}
