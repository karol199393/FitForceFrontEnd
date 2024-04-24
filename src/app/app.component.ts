import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {UsersComponent} from "./components/users/users.component";

import {TrainingsComponent} from "./components/trainings/trainings.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersComponent, TrainingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FitForce';
}

