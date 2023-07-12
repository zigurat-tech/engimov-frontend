import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '', children: [
      {path: '', loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule)},
      {path: '', loadChildren: () => import('./pages/static/static.module').then(m => m.StaticModule)},

    ]
  },
  {path: '**', pathMatch: "full", redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
