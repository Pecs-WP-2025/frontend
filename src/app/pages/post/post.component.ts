import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../../services/articles.service';

@Component({
<<<<<<< HEAD
  selector: 'app-post',
<<<<<<< HEAD
  standalone: true,
  imports: [],
=======
>>>>>>> dd05d4e (feat: basic Angular layout)
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
=======
    selector: 'app-single-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
>>>>>>> 9876383 (feat: added post component)
})
export class PostComponent implements OnInit {
    post: any;
    id: number = 0;
    constructor(
        private articleService: ArticlesService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        // Gettig article id from the url
        this.route.params.subscribe((param) => {
            this.id = parseInt(param['id']);
        });

        this.articleService.getArticle(this.id).subscribe((data) => {
            this.post = data;
        });
    }
}
