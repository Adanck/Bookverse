import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  standalone: false
})
export class BookListComponent {
  @Input() lists: { name: string; count: number; books: { title: string; chapters: string[] }[] }[] = [];
  @Input() selectedList: { name: string; count: number; books: { title: string; chapters: string[] }[] } | null = null;

  @Output() listSelected = new EventEmitter<{ name: string; count: number; books: { title: string; chapters: string[] }[] }>();

  selectList(list: { name: string; count: number; books: { title: string; chapters: string[] }[] }) {
    this.selectedList = list;
    this.listSelected.emit(list);
  }
}
