import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
<<<<<<< HEAD
  standalone: true,
  imports: [],
=======
>>>>>>> dd05d4e (feat: basic Angular layout)
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(public dialog: MatDialog) {}

    openLoginDialog(): void {
        this.dialog.open(LoginComponent);
    }

    openRegisterDialog(): void {
        this.dialog.open(RegisterComponent);
    }
}
