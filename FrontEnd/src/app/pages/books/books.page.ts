import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
  standalone: false,
})
export class BooksPage implements OnInit {

  books = [
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      cover: 'https://covers.openlibrary.org/b/id/6979861-L.jpg'
    },
    {
      title: '1984',
      author: 'George Orwell',
      cover: 'https://covers.openlibrary.org/b/id/7222246-L.jpg'
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      cover: 'https://covers.openlibrary.org/b/id/8228691-L.jpg'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
