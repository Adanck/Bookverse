import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BookListComponent } from './book-list/book-list.component';
import { BookChaptersComponent } from './book-chapters/book-chapters.component';
import { BookLayoutComponent } from './book-layout/book-layout.component';

@NgModule({
  declarations: [
    BookLayoutComponent,
    BookListComponent,
    BookChaptersComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    BookListComponent,
    BookChaptersComponent,
    BookLayoutComponent
  ]
})
export class ComponentsModule { }
