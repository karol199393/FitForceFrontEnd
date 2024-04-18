import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {UsersLearnComponent} from "./components/users-learn/users-learn.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersComponent, UsersLearnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FitForce';
}

