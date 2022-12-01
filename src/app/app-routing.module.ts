import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-property',
    loadChildren: () => import('./pages/add-property/add-property.module').then( m => m.AddPropertyPageModule)
  },
  {
    path: 'update-property/:id',
    loadChildren: () => import('./pages/update-property/update-property.module').then( m => m.UpdatePropertyPageModule)
  },
  {
    path: 'map-view',
    loadChildren: () => import('./pages/map-view/map-view.module').then( m => m.MapViewPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
