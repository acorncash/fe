import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrsDetailPageRoutingModule } from './prs-detail-routing.module';

import { PrsDetailPage } from './prs-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrsDetailPageRoutingModule
  ],
  declarations: [PrsDetailPage]
})
export class PrsDetailPageModule {}
