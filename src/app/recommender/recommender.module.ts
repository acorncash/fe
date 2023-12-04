import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecommenderPageRoutingModule } from './recommender-routing.module';

import { RecommenderPage } from './recommender.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecommenderPageRoutingModule
  ],
  declarations: [RecommenderPage]
})
export class RecommenderPageModule {}
