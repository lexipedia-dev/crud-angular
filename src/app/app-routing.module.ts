import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', pathMatch:"full", redirectTo:"courses"},
  {
    path:'courses',
    loadChildren: () => import("./courses/courses.module").then(m => m.CoursesModule)
  },
  {
    path:'teachers',
    loadChildren: () => import("./teachers/teachers.module").then(m => m.TeachersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
