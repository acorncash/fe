import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithdrawListPageRoutingModule } from './withdraw-list-routing.module';

import { WithdrawListPage } from './withdraw-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithdrawListPageRoutingModule
  ],
  declarations: [WithdrawListPage]
})
export class WithdrawListPageModule {}
