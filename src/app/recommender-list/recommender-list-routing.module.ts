import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommenderListPage } from './recommender-list.page';

const routes: Routes = [
  {
    path: '',
    component: RecommenderListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecommenderListPageRoutingModule {}
