import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { ArticlesService } from './articles.service';
=======
import { ArticlesService } from './articles.service';
import { HttpClient } from '@angular/common/http';
>>>>>>> dd05d4e (feat: basic Angular layout)

describe('ArticlesService', () => {
  let service: ArticlesService;

  beforeEach(() => {
<<<<<<< HEAD
    TestBed.configureTestingModule({});
=======
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: {} },
      ],
    });
>>>>>>> dd05d4e (feat: basic Angular layout)
    service = TestBed.inject(ArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
