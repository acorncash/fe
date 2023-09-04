import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuitPage } from './quit.page';

const routes: Routes = [
  {
    path: '',
    component: QuitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuitPageRoutingModule {}
