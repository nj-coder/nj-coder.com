import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NjTimepickerComponent } from './nj-timepicker.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NjTimepickerComponent
  }
];

@NgModule({
  declarations: [NjTimepickerComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class NjTimepickerModule { }
