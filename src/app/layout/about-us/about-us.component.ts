import { Component } from '@angular/core';

interface Developer {
  picture: string;
  name: string;
  country: string;
  position: string;
  introduction: string;
}

@Component({
  selector: 'app-about-us',
<<<<<<< HEAD
  standalone: true,
  imports: [],
=======
>>>>>>> dd05d4e (feat: basic Angular layout)
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  developers: Developer[] = [
    {
      picture: 'developer1.jpg',
      name: 'Kirill Verendeev',
      country: 'Russia',
      position: 'Backend Developer',
      introduction: 'Kirill was working as a backend developer using Laravel (working with PHP).'
    },
    {
      picture: 'developer2.jpg',
      name: 'Anna Tolmacheva',
      country: 'Russia',
      position: 'Frontend Developer',
      introduction: 'Anna was working as a frontend developer using Angular (working with Typscript, HTML, and CSS).'
    }
  ];
}
