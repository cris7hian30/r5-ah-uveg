import { NgModule } from '@angular/core';
import { NoticiasPageRoutingModule } from './noticias-routing.module';
import { NoticiasPage } from './noticias.page';

@NgModule({
  imports: [
    NoticiasPageRoutingModule,
    NoticiasPage
  ]
})
export class NoticiasPageModule {}