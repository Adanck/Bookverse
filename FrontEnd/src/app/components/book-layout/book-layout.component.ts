import { Component } from '@angular/core';

@Component({
  selector: 'app-book-layout',
  templateUrl: './book-layout.component.html',
  styleUrls: ['./book-layout.component.scss'],
  standalone: false
})
export class BookLayoutComponent {
  bookLists = [
    {
      name: 'History',
      count: 4,
      books: [
        { title: 'Book 1', chapters: ['Chap 1', 'Chap 2'] },
        { title: 'Book 2', chapters: ['Chap A', 'Chap B'] }
      ]
    },
    {
      name: 'Fantasy',
      count: 3,
      books: [{ title: 'Fantasy Book', chapters: ['A', 'B'] }]
    },
    {
      name: 'Philosophy',
      count: 2,
      books: []
    },
    {
      name: 'Saved',
      count: 5,
      books: []
    }
  ];

  selectedList = this.bookLists[0];
  selectedBook = this.selectedList.books[0] || null;

  selectList(list: { name: string; count: number; books: { title: string; chapters: string[] }[] }) {
  this.selectedList = list;
  this.selectedBook = list.books[0] || null;
}

  // Esta es la función que se llama desde el (listSelected) en el template
  onSelectList(name: string) {
    const found = this.bookLists.find(l => l.name === name);
    if (found) {
      this.selectedList = found;
      this.selectedBook = found.books[0] || null;
    }
  }
}
