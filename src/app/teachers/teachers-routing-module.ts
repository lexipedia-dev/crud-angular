import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Teachers } from './teachers/teachers';

const routes: Routes = [
    { path:'', component: Teachers }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
