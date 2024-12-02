<<<<<<< HEAD
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

=======
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    articles: any;
    articles$: any;
    constructor (private articleService : ArticlesService) {}

<<<<<<< HEAD
  ngOnInit(): void {
    // Storing fetched data into the pipe then to be easily accessed in html template
    this.articles$ = this.articleService.getArticles().
    pipe(tap((data) => (this.articles = data)));
  }
>>>>>>> dd05d4e (feat: basic Angular layout)
=======
    ngOnInit(): void {
        // Storing fetched data into the pipe then to be easily accessed in html template
        this.articles$ = this.articleService.getArticles().pipe(tap((data) => (this.articles = data)));
    }
>>>>>>> 28b4b93 (feat: added home component)
}
