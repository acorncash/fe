import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KakaoPageRoutingModule } from './kakao-routing.module';

import { KakaoPage } from './kakao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KakaoPageRoutingModule
  ],
  declarations: [KakaoPage]
})
export class KakaoPageModule {}
