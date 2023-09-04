import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithdrawListPage } from './withdraw-list.page';

const routes: Routes = [
  {
    path: '',
    component: WithdrawListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithdrawListPageRoutingModule {}
