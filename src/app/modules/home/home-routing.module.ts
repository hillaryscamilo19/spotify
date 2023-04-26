import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tracks',
    loadChildren: () => import('../tracks/tracks.module').then(m => m.TracksModule)
  },
  {
    path: 'favorite',
    loadChildren: () => import('../favorites/favorites.module').then(m => m.FavoritesModule)
  },
  {
    path: 'history',
    loadChildren: () => import('../history/history.module').then(m => m.HistoryModule)
    // loadChildren: () => import('../favorites/favorites.module').then(m => m.FavoritesModule)
  },
  {
    path: '**',
    redirectTo: '/tracks'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
