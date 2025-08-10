import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  standalone: false,
})
export class BookListComponent {
  @Input() lists: { name: string; count: number }[] = [];
  @Input() selectedList: string | null = null;
  @Output() listSelected = new EventEmitter<string>();

  select(name: string) {
    this.selectedList = name;
    this.listSelected.emit(name);
  }
}
