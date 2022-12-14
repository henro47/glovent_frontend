import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePropertyPageRoutingModule } from './update-property-routing.module';

import { UpdatePropertyPage } from './update-property.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePropertyPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdatePropertyPage]
})
export class UpdatePropertyPageModule {}
