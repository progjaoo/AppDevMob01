import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadospessoaisPageRoutingModule } from './dadospessoais-routing.module';

import { DadospessoaisPage } from './dadospessoais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadospessoaisPageRoutingModule
  ],
  declarations: [DadospessoaisPage]
})
export class DadospessoaisPageModule {}
