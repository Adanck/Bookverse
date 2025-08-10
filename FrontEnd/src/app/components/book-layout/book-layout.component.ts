import { Component } from '@angular/core';

type Chapter = string;
type Book = { id: string; title: string; author: string; cover?: string; chapters: Chapter[] };
type BookList = { name: string; count: number; books: Book[] };

@Component({
  selector: 'app-book-layout',
  templateUrl: './book-layout.component.html',
  styleUrls: ['./book-layout.component.scss'],
  standalone: false,
})
export class BookLayoutComponent {

  lists: BookList[] = [
    {
      name: 'History',
      count: 2,
      books: [
        {
          id: 'sapiens',
          title: 'Sapiens',
          author: 'Yuval Noah Harari',
          cover: 'https://covers.openlibrary.org/b/id/8375161-L.jpg',
          chapters: ['Cognitive Revolution', 'Agricultural Revolution', 'Unification of Humankind']
        },
        {
          id: 'ggs',
          title: 'Guns, Germs, and Steel',
          author: 'Jared Diamond',
          cover: 'https://covers.openlibrary.org/b/id/8134150-L.jpg',
          chapters: ['Geography & Fate', 'Food Production']
        }
      ]
    },
    {
      name: 'Fantasy',
      count: 2,
      books: [
        {
          id: 'hobbit',
          title: 'The Hobbit',
          author: 'J.R.R. Tolkien',
          cover: 'https://covers.openlibrary.org/b/id/6979861-L.jpg',
          chapters: ['An Unexpected Party', 'Roast Mutton', 'A Short Rest']
        },
        {
          id: 'lotr',
          title: 'The Fellowship of the Ring',
          author: 'J.R.R. Tolkien',
          cover: 'https://covers.openlibrary.org/b/id/8231856-L.jpg',
          chapters: ['A Long-expected Party', 'The Shadow of the Past']
        }
      ]
    },
    { name: 'Philosophy', count: 0, books: [] },
    { name: 'Saved', count: 0, books: [] },
  ];

  selectedList: BookList = this.lists[0];
  selectedBook: Book = this.lists[0].books[0];

  // NUEVO: lista ya mapeada solo con nombre y conteo (para el hijo)
  get listHeaders(): { name: string; count: number }[] {
    return this.lists.map(l => ({ name: l.name, count: l.count }));
  }
  
  onListSelected(name: string) {
    const found = this.lists.find(l => l.name === name);
    if (found) {
      this.selectedList = found;
      this.selectedBook = found.books[0] ?? ({} as Book);
    }
  }

  onPickBook(book: Book) {
    this.selectedBook = book;
  }
}
