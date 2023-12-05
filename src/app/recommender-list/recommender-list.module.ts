import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecommenderListPageRoutingModule } from './recommender-list-routing.module';

import { RecommenderListPage } from './recommender-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecommenderListPageRoutingModule
  ],
  declarations: [RecommenderListPage]
})
export class RecommenderListPageModule {}
