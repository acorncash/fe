import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaverPage } from './naver.page';

const routes: Routes = [
  {
    path: '',
    component: NaverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NaverPageRoutingModule {}
