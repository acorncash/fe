import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommenderPage } from './recommender.page';

const routes: Routes = [
  {
    path: '',
    component: RecommenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecommenderPageRoutingModule {}
