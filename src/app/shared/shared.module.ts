import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrderByPipe } from './pipe/orderby.pipe'

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
      TitleComponent,
      FooterComponent,
      CardComponent,
      OrderByPipe
  ],
  exports: [
    CommonModule,
    TitleComponent,
    FooterComponent,
    CardComponent,
  ]
})

export class SharedModule { }