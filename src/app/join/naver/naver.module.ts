import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaverPageRoutingModule } from './naver-routing.module';

import { NaverPage } from './naver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaverPageRoutingModule
  ],
  declarations: [NaverPage]
})
export class NaverPageModule {}
