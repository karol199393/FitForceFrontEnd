import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Training} from "../components/trainings/training";

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {
  constructor(private http: HttpClient) { }

  getAllTrainings(): Observable<Training[]> {
    return this.http.get<Training[]>('/trainings/getAllTrainings');
  }

  getTrainingById(id: number): Observable<any> {
    return this.http.get(`/trainings/${id}`);
  }
}
