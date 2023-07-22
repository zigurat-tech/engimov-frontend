import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('@app/pages/index/index.module').then(m => m.IndexModule)
  },
  {
    path: '', loadChildren: () => import('@app/pages/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {path: '**', pathMatch: "full", redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
