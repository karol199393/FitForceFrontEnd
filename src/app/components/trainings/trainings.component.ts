import {Component, OnInit} from '@angular/core';
import {TrainingsService} from "../../services/trainings.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-trainings',
  standalone: true,
  templateUrl: './trainings.component.html',
  imports: [
    NgForOf,
    NgIf
  ],
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {
  protected trainings: any;
  protected selectedTraining: any;

  constructor(private trainingsService: TrainingsService) {
  }

  ngOnInit(): void {
    this.getAllTrainings();
  }

  getAllTrainings(): void {
    this.trainingsService.getAllTrainings().subscribe(
      (response) => {
        this.trainings = response;
        console.log(this.trainings)
      },
      (error) => {
        console.error('Wystąpił błąd podczas pobierania treningów:', error);
        // Tutaj możesz obsłużyć błąd, np. wyświetlić komunikat dla użytkownika
      }
    );
  }

}
