import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-chapters',
  templateUrl: './book-chapters.component.html',
  styleUrls: ['./book-chapters.component.scss'],
  standalone: false
})
export class BookChaptersComponent {
  @Input() chapters: string[] = [];
}
