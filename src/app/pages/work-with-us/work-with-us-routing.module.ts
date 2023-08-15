import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WorkWithUsComponent} from "@app/pages/work-with-us/work-with-us.component";

const routes: Routes = [
  {path: 'work_with_us', component: WorkWithUsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkWithUsRoutingModule {
}
