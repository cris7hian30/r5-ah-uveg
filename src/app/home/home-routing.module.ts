import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'noticias',
        loadComponent: () => import('../noticias/noticias.page').then(m => m.NoticiasPage),
      },
      {
        path: 'agregar-noticia',
        loadComponent: () => import('../agregar-noticia/agregar-noticia.page').then(m => m.AgregarNoticiaPage),
      },
      {
        path: '',
        redirectTo: 'noticias',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
